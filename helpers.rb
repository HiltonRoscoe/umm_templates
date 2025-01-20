  class InvalidNCNameError < StandardError; end

  # Validates a NCName. Throws if fails  
  # Params:
  # +param+:: String to validate
  def validate_ncname(param)
    # Regular expression for NCName
    ncname_regex = /^[A-Za-z_][\w.-]*$/
    
    unless param.is_a?(String) && param.match?(ncname_regex)
      raise InvalidNCNameError, "Invalid NCName: '#{param}'"
    end
    true # Return true if valid
  end

  # Determines the order that properties should appear in the output. XSD uses 
  # sequences and elements must appear in a certain order
  # Params:
  # +klass+:: The UMM Class
  # +property+:: The UMM property
  def get_sortable_prop_name(klass, property)
    klass_has_simple_content = klass.properties.any?{|p| p.applied_stereotypes.any?{|s| s.name == 'simpleContent'}} 
    is_xml_attribute = (klass_has_simple_content &&  !property.applied_stereotypes.any?{|s| s.name == 'simpleContent' }) || property.applied_stereotypes.any?{|s| s.name == 'xmlAttribute'} 
    standardized_property = (property.name || property.type.name).downcase 
    if is_xml_attribute
      ' ' + standardized_property #use low ASCII table character to sort ahead of everything else
    # for items supposed to appear together, make them sort after their ancestor by adding a space
    elsif standardized_property == 'otherdisposition'
      'disposition '
    elsif standardized_property == 'otherhashtype'
      'hashtype '
    elsif standardized_property == 'othertype'
      'type '
    elsif standardized_property == 'endtime'
      'starttime '
    elsif standardized_property == 'enddate'
      'startdate '
    elsif standardized_property == 'othervotevariation'
      'votevariation '
    elsif standardized_property == 'sequenceend'
      'sequencestart '
    elsif standardized_property == 'istest'
      'issuerabbreviation '
    elsif standardized_property == 'otherstatus'
      'status '
    elsif standardized_property == 'otherreporttype'
      'reporttype '
    else
      standardized_property
    end
  end


  # Gets the standardized name for a given property. The standardized name should match what was generated
  # during XSD or JSON Schema generation
  # Params:
  # +property+:: The UMM property
  # +singular_id_suffix:: The suffix used for singular Identifier references
  # +plural_id_suffix:: The suffix used for plural Identifier references
  # +pluralize_roles:: Whether role names should be pluralized
  # +underscore:: Whether CamelCase should be converted to under_score
  def get_property_name(property, singular_id_suffix, plural_id_suffix, pluralize_roles = false, underscore = false)
  	name = property.name
    name ||= property.type.name
    name = name.underscore if underscore
    if property.association? && !(property.attribute? || property.composite?)
      id_suffix = property.multiple? ? plural_id_suffix : singular_id_suffix
      name = name + id_suffix 
    else
      name = name.pluralize if property.multiple? && pluralize_roles 
    end
    name 
  end

  # Gets the JSON type given a UML property.
  # Params:
  # +property+:: The UMM property
  def get_property_type(property)
    if !(property.type.primitive? || property.type.enumeration? || (property.association? && !(property.attribute?) && !(property.composite?))) # This may not cover all necessary cases
      "map"
    elsif property.type.primitive? && [UmlMetamodel::PRIMITIVES[:integer],UmlMetamodel::PRIMITIVES[:float], UmlMetamodel::PRIMITIVES[:double]].include?(property.type.base_primitive)
      "number"
    elsif property.type.primitive? && [UmlMetamodel::PRIMITIVES[:boolean]].include?(property.type.base_primitive)
      "boolean"
    else
      "string"
    end
  end