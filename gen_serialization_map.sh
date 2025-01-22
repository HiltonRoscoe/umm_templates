#!/usr/bin/bash
# sudo apt install libxml2-utils

echo Check that all destination repos are in the current branch!
read -p "Press any key to proceed..." 

echo Generate JSON2XML and XML2JSON mapping XSLTs

# Define an array of template configurations
declare -A template1=( 
    [template]="/umm_templates/ruby_json2xml_binding.rb.erb"
    [output]="/BallotDefinition/json2xml.xsl"
    [module]="BallotDefinition"
    [model]="~/Prometheus/Generated_Code/BallotDefinition UML Model-0.0.0.rb"
    [prefix]="BallotDefinition"
    [schema]="http://itl.nist.gov/ns/voting/1500-20/v1"
)
declare -A template2=(
    [template]="/umm_templates/ruby_json2xml_binding.rb.erb"
    [output]="/CastVoteRecords/json2xml.xsl"
    [module]="CVR"
    [model]="~/Prometheus/Generated_Code/NIST-1.0.0.rb"
    [prefix]="CVR"
    [schema]="http://itl.nist.gov/ns/voting/1500-103/v1"
)
declare -A template3=(
    [template]="/umm_templates/ruby_json2xml_binding.rb.erb"
    [output]="/ElectionEventLogging/json2xml.xsl"
    [module]="EventLogging"
    [model]="~/Prometheus/Generated_Code/EventLogging-1.0.0.rb"
    [prefix]="EventLogging"
    [schema]="http://itl.nist.gov/ns/voting/1500-101/v1"
)
declare -A template4=(
    [template]="/umm_templates/ruby_json2xml_binding.rb.erb"
    [output]="/ElectionResultsReporting/json2xml.xsl"
    [module]="ElectionResults"
    [model]="~/Prometheus/Generated_Code/NIST-2.0.0.rb"
    [prefix]="ElectionResults"
    [schema]="http://itl.nist.gov/ns/voting/1500-101/v1"
)
declare -A template5=(
    [template]="/umm_templates/ruby_json2xml_binding.rb.erb"
    [output]="/VoterRecordsInterchange/json2xml.xsl"
    [module]="VRI"
    [model]="~/Prometheus/Generated_Code/VRI Implementation-0.0.0.rb"
    [prefix]="VRI"
    [schema]="http://itl.nist.gov/ns/voting/1500-102/v1"
)

# Store all templates in an array
templates=(template2)
set -x
# Iterate through the templates and execute `umm_template`
for template_name in "${templates[@]}"; do
    eval "declare -n template=$template_name"
    echo 🛠️ JSON2XML for "${template[model]}"
    umm_template \
        "${template[model]}" \
        -t "${template[template]}" \
        -o "${template[output]}" \
        -l outer_module="${template[module]}",target_schema="${template[schema]}" \
        -p "${template[module]}" \
    # Post-processing: Check if the output is a valid XML file
    if xmllint --noout "${template[output]}" 2>/dev/null; then
        echo "🟩 Validation passed: ${template[output]} is a valid XML file."
      # Format the XML document and overwrite the original
        xmllint --format "${template[output]}" --output "${template[output]}"
        echo "🦋 Formatted and overwritten: ${template[output]}"
    else
        echo "😡 Validation failed: ${template[output]} is not a valid XML file." >&2
    fi
done

echo XML2JSON
