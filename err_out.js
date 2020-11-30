design = model.getDesign();

// create enumerations
{
  domain = design.createDomain();
  domain.name = "BallotMeasureType";
  ce = domain.createConstraintEnumeration();
      ce.add("ballot-measure","");
      ce.add("initiative","");
      ce.add("other","");
      ce.add("recall","");
      ce.add("referendum","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "CandidatePostElectionStatus";
  ce = domain.createConstraintEnumeration();
      ce.add("advanced-to-runoff","");
      ce.add("defeated","");
      ce.add("projected-winner","");
      ce.add("winner","");
      ce.add("withdrawn","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "CandidatePreElectionStatus";
  ce = domain.createConstraintEnumeration();
      ce.add("filed","");
      ce.add("qualified","");
      ce.add("withdrawn","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "CountItemStatus";
  ce = domain.createConstraintEnumeration();
      ce.add("completed","");
      ce.add("in-process","");
      ce.add("not-processed","");
      ce.add("unknown","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "CountItemType";
  ce = domain.createConstraintEnumeration();
      ce.add("absentee","");
      ce.add("absentee-fwab","");
      ce.add("absentee-in-person","");
      ce.add("absentee-mail","");
      ce.add("early","");
      ce.add("election-day","");
      ce.add("other","");
      ce.add("provisional","");
      ce.add("seats","");
      ce.add("total","");
      ce.add("uocava","");
      ce.add("write-in","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "DayType";
  ce = domain.createConstraintEnumeration();
      ce.add("all","");
      ce.add("friday","");
      ce.add("monday","");
      ce.add("saturday","");
      ce.add("sunday","");
      ce.add("thursday","");
      ce.add("tuesday","");
      ce.add("wednesday","");
      ce.add("weekday","");
      ce.add("weekend","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "DeviceType";
  ce = domain.createConstraintEnumeration();
      ce.add("bmd","");
      ce.add("dre","");
      ce.add("manual-count","");
      ce.add("opscan-central","");
      ce.add("opscan-precinct","");
      ce.add("other","");
      ce.add("unknown","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "ElectionType";
  ce = domain.createConstraintEnumeration();
      ce.add("general","");
      ce.add("other","");
      ce.add("partisan-primary-closed","");
      ce.add("partisan-primary-open","");
      ce.add("primary","");
      ce.add("runoff","");
      ce.add("special","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "GeoSpatialFormat";
  ce = domain.createConstraintEnumeration();
      ce.add("geo-json","");
      ce.add("gml","");
      ce.add("kml","");
      ce.add("shp","");
      ce.add("wkt","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "IdentifierType";
  ce = domain.createConstraintEnumeration();
      ce.add("fips","");
      ce.add("local-level","");
      ce.add("national-level","");
      ce.add("ocd-id","");
      ce.add("other","");
      ce.add("state-level","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "OfficeTermType";
  ce = domain.createConstraintEnumeration();
      ce.add("full-term","");
      ce.add("unexpired-term","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "ReportDetailLevel";
  ce = domain.createConstraintEnumeration();
      ce.add("precinct-level","");
      ce.add("summary-contest","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "ReportingUnitType";
  ce = domain.createConstraintEnumeration();
      ce.add("ballot-batch","");
      ce.add("ballot-style-area","");
      ce.add("borough","");
      ce.add("city","");
      ce.add("city-council","");
      ce.add("combined-precinct","");
      ce.add("congressional","");
      ce.add("country","");
      ce.add("county","");
      ce.add("county-council","");
      ce.add("drop-box","");
      ce.add("judicial","");
      ce.add("municipality","");
      ce.add("other","");
      ce.add("polling-place","");
      ce.add("precinct","");
      ce.add("school","");
      ce.add("special","");
      ce.add("split-precinct","");
      ce.add("state","");
      ce.add("state-house","");
      ce.add("state-senate","");
      ce.add("town","");
      ce.add("township","");
      ce.add("utility","");
      ce.add("village","");
      ce.add("vote-center","");
      ce.add("ward","");
      ce.add("water","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "ResultsStatus";
  ce = domain.createConstraintEnumeration();
      ce.add("certified","");
      ce.add("correction","");
      ce.add("pre-election","");
      ce.add("recount","");
      ce.add("unofficial-complete","");
      ce.add("unofficial-partial","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
{
  domain = design.createDomain();
  domain.name = "VoteVariation";
  ce = domain.createConstraintEnumeration();
      ce.add("approval","");
      ce.add("borda","");
      ce.add("cumulative","");
      ce.add("majority","");
      ce.add("n-of-m","");
      ce.add("other","");
      ce.add("plurality","");
      ce.add("proportional","");
      ce.add("range","");
      ce.add("rcv","");
      ce.add("super-majority","");
  }
domain.setValueList(ce);
type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
domain.setLogicalDatatype(type);
// a reasonable length for enumeration values
domain.setDataTypeSize(50);
// create entities
entity = model.createEntity();
entity.setName("AnnotatedString");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Annotation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Content")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("AnnotatedUri");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Annotation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Content")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("BallotCounts");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("BallotsCast")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("BallotsOutstanding")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("BallotsRejected")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("BallotMeasureContest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("ConStatement")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("EffectOfAbstain")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("FullText")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("PassageThreshold")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("ProStatement")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("SummaryText")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("BallotMeasureType");
  attribute.setDomain(domain);
    entity = model.createEntity();
entity.setName("BallotMeasureSelection");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Selection")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("BallotStyle");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("Candidate");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("BallotName")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("CampaignSlogan")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("FileDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsIncumbent")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsTopTicket")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("PostElectionStatus")
    domains = design.getDomainSet();
  domain = domains.getByName("CandidatePostElectionStatus");
  attribute.setDomain(domain);
    attribute = entity.createAttribute();

attribute.setName("PreElectionStatus")
    domains = design.getDomainSet();
  domain = domains.getByName("CandidatePreElectionStatus");
  attribute.setDomain(domain);
    entity = model.createEntity();
entity.setName("CandidateContest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("NumberElected")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("NumberRunoff")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("VotesAllowed")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("CandidateSelection");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("IsWriteIn")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("Coalition");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("ContactInformation");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Directions")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("Contest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

entity.setCompleteSubtypes(true);
// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Abbreviation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("BallotSubTitle")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("BallotTitle")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("HasRotation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("OtherVoteVariation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("SequenceOrder")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("SubUnitsReported")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("TotalSubUnits")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("VoteVariation")
    domains = design.getDomainSet();
  domain = domains.getByName("VoteVariation");
  attribute.setDomain(domain);
    entity = model.createEntity();
entity.setName("ContestSelection");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

entity.setCompleteSubtypes(true);
// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("SequenceOrder")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("CountStatus");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Status")
    domains = design.getDomainSet();
  domain = domains.getByName("CountItemStatus");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("CountItemType");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("Counts");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

entity.setCompleteSubtypes(true);
// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("IsSuppressedForPrivacy")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Round")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("CountItemType");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("DeviceClass");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Manufacturer")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Model")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("DeviceType");
  attribute.setDomain(domain);
    entity = model.createEntity();
entity.setName("Election");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("EndDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("StartDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("ElectionType");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("ElectionAdministration");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("ElectionReport");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Format")
    domains = design.getDomainSet();
  domain = domains.getByName("ReportDetailLevel");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("GeneratedDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Timestamp");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("IsTest")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Issuer")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("IssuerAbbreviation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Notes")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("SequenceEnd")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("SequenceStart")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Status")
    domains = design.getDomainSet();
  domain = domains.getByName("ResultsStatus");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("TestType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("VendorApplicationId")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("ExternalIdentifier");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("IdentifierType");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Value")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("GpUnit");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

entity.setCompleteSubtypes(true);
// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("Header");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("Hours");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Day")
    domains = design.getDomainSet();
  domain = domains.getByName("DayType");
  attribute.setDomain(domain);
    attribute = entity.createAttribute();

attribute.setName("EndTime")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("StartTime")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("LatLng");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Latitude")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("NUMERIC");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Longitude")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("NUMERIC");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Source")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("Office");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Description")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("FilingDeadline")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsPartisan")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("OfficeGroup");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("OrderedContent");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

entity.setCompleteSubtypes(true);
// create attributes under entity
entity = model.createEntity();
entity.setName("OrderedContest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("OrderedHeader");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("OtherCounts");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Overvotes")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("NUMERIC");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Undervotes")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("NUMERIC");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("WriteIns")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("Party");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Abbreviation")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Color")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsRecognizedParty")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Name")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Slogan")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("PartyContest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("PartyRegistration");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Count")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("PartySelection");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("Person");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("DateOfBirth")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("FirstName")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("FullName")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Gender")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("LastName")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Nickname")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Prefix")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Profession")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Suffix")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Title")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("ReportingDevice");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("SerialNumber")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("ReportingUnit");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("IsDistricted")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsMailOnly")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Number")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("OtherType")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("SubUnitsReported")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("TotalSubUnits")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("ReportingUnitType");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("VotersParticipated")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("VotersRegistered")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Integer");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("RetentionContest");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("Schedule");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("EndDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsOnlyByAppointment")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsOrByAppointment")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("IsSubjectToChange")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("Boolean");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("StartDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    entity = model.createEntity();
entity.setName("SpatialDimension");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
entity = model.createEntity();
entity.setName("SpatialExtent");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Coordinates")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  attribute = entity.createAttribute();

attribute.setName("Format")
    domains = design.getDomainSet();
  domain = domains.getByName("GeoSpatialFormat");
  attribute.setDomain(domain);
      attribute.setNullsAllowed(false);
  entity = model.createEntity();
entity.setName("Term");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("EndDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Label")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("StartDate")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
    attribute = entity.createAttribute();

attribute.setName("Type")
    domains = design.getDomainSet();
  domain = domains.getByName("OfficeTermType");
  attribute.setDomain(domain);
    entity = model.createEntity();
entity.setName("VoteCounts");
// color for regular entity
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(199/360,0.35,0.90));

// create attributes under entity
attribute = entity.createAttribute();

attribute.setName("Count")
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("NUMERIC");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
      attribute.setNullsAllowed(false);
  // DO SECOND PASS OF ENTITIES
              source = model.getEntitySet().getByName("BallotCounts");
    target = model.getEntitySet().getByName("Counts");
  source.setHierarchicalParent(target);
        source = model.getEntitySet().getByName("BallotMeasureContest");
    target = model.getEntitySet().getByName("Contest");
  source.setHierarchicalParent(target);
    sourceName = "AnnotatedUri";
 
    target = model.getEntitySet().getByName("BallotMeasureContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("InfoUri");
      
  relation.setName("BallotMeasureContest_InfoUri");
     // relation.setProperty("fkRole", "BallotMeasureContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "InfoUri");
        source = model.getEntitySet().getByName("BallotMeasureSelection");
    target = model.getEntitySet().getByName("ContestSelection");
  source.setHierarchicalParent(target);
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("BallotMeasureSelection");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("BallotMeasureSelection_ExternalIdentifier");
     // relation.setProperty("fkRole", "BallotMeasureSelection");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
        sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("BallotStyle");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("BallotStyle_ExternalIdentifier");
     // relation.setProperty("fkRole", "BallotStyle");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("BallotStyle");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("BallotStyle_GpUnit");
     // relation.setProperty("fkRole", "BallotStyle");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "GpUnit");
    sourceName = "AnnotatedUri";
 
    target = model.getEntitySet().getByName("BallotStyle");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ImageUri");
      
  relation.setName("BallotStyle_ImageUri");
     // relation.setProperty("fkRole", "BallotStyle");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ImageUri");
    sourceName = "OrderedContent";
 
    target = model.getEntitySet().getByName("BallotStyle");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("BallotStyle_OrderedContent");
     // relation.setProperty("fkRole", "BallotStyle");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OrderedContent");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("BallotStyle");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("BallotStyle_Party");
     // relation.setProperty("fkRole", "BallotStyle");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
        sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("Candidate");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Candidate_ContactInformation");
     // relation.setProperty("fkRole", "Candidate");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Candidate");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Candidate_ExternalIdentifier");
     // relation.setProperty("fkRole", "Candidate");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("Candidate");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Candidate_Party");
     // relation.setProperty("fkRole", "Candidate");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("Candidate");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Candidate_Person");
     // relation.setProperty("fkRole", "Candidate");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Person");
        source = model.getEntitySet().getByName("CandidateContest");
    target = model.getEntitySet().getByName("Contest");
  source.setHierarchicalParent(target);
    sourceName = "Office";
 
    target = model.getEntitySet().getByName("CandidateContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("CandidateContest_Office");
     // relation.setProperty("fkRole", "CandidateContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Office");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("CandidateContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("PrimaryParty");
      
  relation.setName("CandidateContest_PrimaryParty");
     // relation.setProperty("fkRole", "CandidateContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "PrimaryParty");
        source = model.getEntitySet().getByName("CandidateSelection");
    target = model.getEntitySet().getByName("ContestSelection");
  source.setHierarchicalParent(target);
    sourceName = "Candidate";
 
    target = model.getEntitySet().getByName("CandidateSelection");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("CandidateSelection_Candidate");
     // relation.setProperty("fkRole", "CandidateSelection");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Candidate");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("CandidateSelection");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("EndorsementParty");
      
  relation.setName("CandidateSelection_EndorsementParty");
     // relation.setProperty("fkRole", "CandidateSelection");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "EndorsementParty");
        source = model.getEntitySet().getByName("Coalition");
    target = model.getEntitySet().getByName("Party");
  source.setHierarchicalParent(target);
    sourceName = "Contest";
 
    target = model.getEntitySet().getByName("Coalition");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Coalition_Contest");
     // relation.setProperty("fkRole", "Coalition");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Contest");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("Coalition");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Coalition_Party");
     // relation.setProperty("fkRole", "Coalition");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
        entity = model.createEntity();
sourceName = "ContactInformationAddressLine";
entity.setName(sourceName);
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(0,0,0.90));

attribute = entity.createAttribute();
attribute.setName("AddressLine")
// DETERMINE DATA TYPE
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
   
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("1");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ContactInformation_AddressLine");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "AddressLine");
    sourceName = "AnnotatedString";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("Email");
      
  relation.setName("ContactInformation_Email");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Email");
    sourceName = "AnnotatedString";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("Fax");
      
  relation.setName("ContactInformation_Fax");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Fax");
    sourceName = "LatLng";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ContactInformation_LatLng");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "LatLng");
    sourceName = "AnnotatedString";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("Phone");
      
  relation.setName("ContactInformation_Phone");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Phone");
    sourceName = "Schedule";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ContactInformation_Schedule");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Schedule");
    sourceName = "AnnotatedUri";
 
    target = model.getEntitySet().getByName("ContactInformation");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("Uri");
      
  relation.setName("ContactInformation_Uri");
     // relation.setProperty("fkRole", "ContactInformation");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Uri");
        sourceName = "ContestSelection";
 
    target = model.getEntitySet().getByName("Contest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Contest_ContestSelection");
     // relation.setProperty("fkRole", "Contest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContestSelection");
    sourceName = "CountStatus";
 
    target = model.getEntitySet().getByName("Contest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Contest_CountStatus");
     // relation.setProperty("fkRole", "Contest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "CountStatus");
    sourceName = "ReportingUnit";
 
    target = model.getEntitySet().getByName("Contest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ElectionDistrict");
      
  relation.setName("Contest_ElectionDistrict");
     // relation.setProperty("fkRole", "Contest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ElectionDistrict");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Contest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Contest_ExternalIdentifier");
     // relation.setProperty("fkRole", "Contest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "OtherCounts";
 
    target = model.getEntitySet().getByName("Contest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Contest_OtherCounts");
     // relation.setProperty("fkRole", "Contest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OtherCounts");
        sourceName = "VoteCounts";
 
    target = model.getEntitySet().getByName("ContestSelection");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ContestSelection_VoteCounts");
     // relation.setProperty("fkRole", "ContestSelection");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "VoteCounts");
            sourceName = "DeviceClass";
 
    target = model.getEntitySet().getByName("Counts");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Counts_DeviceClass");
     // relation.setProperty("fkRole", "Counts");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "DeviceClass");
    sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("Counts");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("Counts_GpUnit");
     // relation.setProperty("fkRole", "Counts");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "GpUnit");
            sourceName = "BallotCounts";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Election_BallotCounts");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "BallotCounts");
    sourceName = "BallotStyle";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Election_BallotStyle");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "BallotStyle");
    sourceName = "Candidate";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Election_Candidate");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Candidate");
    sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Election_ContactInformation");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "Contest";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Election_Contest");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Contest");
    sourceName = "CountStatus";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Election_CountStatus");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "CountStatus");
    sourceName = "ReportingUnit";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ElectionScope");
      
  relation.setName("Election_ElectionScope");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ElectionScope");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Election");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Election_ExternalIdentifier");
     // relation.setProperty("fkRole", "Election");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
        sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("ElectionAdministration");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionAdministration_ContactInformation");
     // relation.setProperty("fkRole", "ElectionAdministration");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("ElectionAdministration");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ElectionOfficialPerson");
      
  relation.setName("ElectionAdministration_ElectionOfficialPerson");
     // relation.setProperty("fkRole", "ElectionAdministration");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ElectionOfficialPerson");
        sourceName = "Election";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_Election");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Election");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("ElectionReport_ExternalIdentifier");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_GpUnit");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "GpUnit");
    sourceName = "Header";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_Header");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Header");
    sourceName = "Office";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_Office");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Office");
    sourceName = "OfficeGroup";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_OfficeGroup");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OfficeGroup");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_Party");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("ElectionReport");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ElectionReport_Person");
     // relation.setProperty("fkRole", "ElectionReport");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Person");
            sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("GpUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ComposingGpUnit");
      
  relation.setName("GpUnit_ComposingGpUnit");
     // relation.setProperty("fkRole", "GpUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ComposingGpUnit");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("GpUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("GpUnit_ExternalIdentifier");
     // relation.setProperty("fkRole", "GpUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
        sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Header");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Header_ExternalIdentifier");
     // relation.setProperty("fkRole", "Header");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
                sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("Office");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Office_ContactInformation");
     // relation.setProperty("fkRole", "Office");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "ReportingUnit";
 
    target = model.getEntitySet().getByName("Office");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("ElectionDistrict");
      
  relation.setName("Office_ElectionDistrict");
     // relation.setProperty("fkRole", "Office");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ElectionDistrict");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Office");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Office_ExternalIdentifier");
     // relation.setProperty("fkRole", "Office");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("Office");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("OfficeHolderPerson");
      
  relation.setName("Office_OfficeHolderPerson");
     // relation.setProperty("fkRole", "Office");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OfficeHolderPerson");
    sourceName = "Term";
 
    target = model.getEntitySet().getByName("Office");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Office_Term");
     // relation.setProperty("fkRole", "Office");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Term");
        sourceName = "Office";
 
    target = model.getEntitySet().getByName("OfficeGroup");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("OfficeGroup_Office");
     // relation.setProperty("fkRole", "OfficeGroup");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Office");
    sourceName = "OfficeGroup";
 
    target = model.getEntitySet().getByName("OfficeGroup");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
      relation.setNameOnTarget("SubOfficeGroup");
      
  relation.setName("OfficeGroup_SubOfficeGroup");
     // relation.setProperty("fkRole", "OfficeGroup");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "SubOfficeGroup");
            source = model.getEntitySet().getByName("OrderedContest");
    target = model.getEntitySet().getByName("OrderedContent");
  source.setHierarchicalParent(target);
    sourceName = "Contest";
 
    target = model.getEntitySet().getByName("OrderedContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("OrderedContest_Contest");
     // relation.setProperty("fkRole", "OrderedContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Contest");
    sourceName = "ContestSelection";
 
    target = model.getEntitySet().getByName("OrderedContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("OrderedContestSelection");
      
  relation.setName("OrderedContest_OrderedContestSelection");
     // relation.setProperty("fkRole", "OrderedContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OrderedContestSelection");
        source = model.getEntitySet().getByName("OrderedHeader");
    target = model.getEntitySet().getByName("OrderedContent");
  source.setHierarchicalParent(target);
    sourceName = "Header";
 
    target = model.getEntitySet().getByName("OrderedHeader");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("OrderedHeader_Header");
     // relation.setProperty("fkRole", "OrderedHeader");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Header");
    sourceName = "OrderedContent";
 
    target = model.getEntitySet().getByName("OrderedHeader");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("OrderedHeader_OrderedContent");
     // relation.setProperty("fkRole", "OrderedHeader");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "OrderedContent");
        sourceName = "DeviceClass";
 
    target = model.getEntitySet().getByName("OtherCounts");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("OtherCounts_DeviceClass");
     // relation.setProperty("fkRole", "OtherCounts");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "DeviceClass");
    sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("OtherCounts");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("OtherCounts_GpUnit");
     // relation.setProperty("fkRole", "OtherCounts");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "GpUnit");
        sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("Party");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Party_ContactInformation");
     // relation.setProperty("fkRole", "Party");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Party");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Party_ExternalIdentifier");
     // relation.setProperty("fkRole", "Party");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("Party");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("LeaderPerson");
      
  relation.setName("Party_LeaderPerson");
     // relation.setProperty("fkRole", "Party");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "LeaderPerson");
    sourceName = "AnnotatedUri";
 
    target = model.getEntitySet().getByName("Party");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("LogoUri");
      
  relation.setName("Party_LogoUri");
     // relation.setProperty("fkRole", "Party");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "LogoUri");
    sourceName = "GpUnit";
 
    target = model.getEntitySet().getByName("Party");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("PartyScopeGpUnit");
      
  relation.setName("Party_PartyScopeGpUnit");
     // relation.setProperty("fkRole", "Party");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "PartyScopeGpUnit");
        source = model.getEntitySet().getByName("PartyContest");
    target = model.getEntitySet().getByName("Contest");
  source.setHierarchicalParent(target);
        sourceName = "Party";
 
    target = model.getEntitySet().getByName("PartyRegistration");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("PartyRegistration_Party");
     // relation.setProperty("fkRole", "PartyRegistration");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
        source = model.getEntitySet().getByName("PartySelection");
    target = model.getEntitySet().getByName("ContestSelection");
  source.setHierarchicalParent(target);
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("PartySelection");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("PartySelection_Party");
     // relation.setProperty("fkRole", "PartySelection");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
        sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("Person");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Person_ContactInformation");
     // relation.setProperty("fkRole", "Person");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "ExternalIdentifier";
 
    target = model.getEntitySet().getByName("Person");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Person_ExternalIdentifier");
     // relation.setProperty("fkRole", "Person");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ExternalIdentifier");
    entity = model.createEntity();
sourceName = "PersonMiddleName";
entity.setName(sourceName);
entity.setUseDefaultColor(false);
entity.setBackgroundColor(java.awt.Color.getHSBColor(0,0,0.90));

attribute = entity.createAttribute();
attribute.setName("MiddleName")
// DETERMINE DATA TYPE
    // primitive type 
  type = model.getDesign().getLogicalDatatypeSet().getLogTypeByName("String");
  attribute.setLogicalDatatype(type);
  attribute.setDomain(null);
   
    target = model.getEntitySet().getByName("Person");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("1");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Person_MiddleName");
     // relation.setProperty("fkRole", "Person");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "MiddleName");
    sourceName = "Party";
 
    target = model.getEntitySet().getByName("Person");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("Person_Party");
     // relation.setProperty("fkRole", "Person");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Party");
        source = model.getEntitySet().getByName("ReportingDevice");
    target = model.getEntitySet().getByName("GpUnit");
  source.setHierarchicalParent(target);
    sourceName = "DeviceClass";
 
    target = model.getEntitySet().getByName("ReportingDevice");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("ReportingDevice_DeviceClass");
     // relation.setProperty("fkRole", "ReportingDevice");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "DeviceClass");
        source = model.getEntitySet().getByName("ReportingUnit");
    target = model.getEntitySet().getByName("GpUnit");
  source.setHierarchicalParent(target);
    sourceName = "Person";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("Authority");
      
  relation.setName("ReportingUnit_Authority");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Authority");
    sourceName = "ContactInformation";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ReportingUnit_ContactInformation");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ContactInformation");
    sourceName = "CountStatus";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("ReportingUnit_CountStatus");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "CountStatus");
    sourceName = "ElectionAdministration";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ReportingUnit_ElectionAdministration");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "ElectionAdministration");
    sourceName = "PartyRegistration";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ReportingUnit_PartyRegistration");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "PartyRegistration");
    sourceName = "SpatialDimension";
 
    target = model.getEntitySet().getByName("ReportingUnit");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("ReportingUnit_SpatialDimension");
     // relation.setProperty("fkRole", "ReportingUnit");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "SpatialDimension");
        source = model.getEntitySet().getByName("RetentionContest");
    target = model.getEntitySet().getByName("BallotMeasureContest");
  source.setHierarchicalParent(target);
    sourceName = "Candidate";
 
    target = model.getEntitySet().getByName("RetentionContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(false);
          relation.setOptionalSource(true);
        
  relation.setName("RetentionContest_Candidate");
     // relation.setProperty("fkRole", "RetentionContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Candidate");
    sourceName = "Office";
 
    target = model.getEntitySet().getByName("RetentionContest");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("*");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
        
  relation.setName("RetentionContest_Office");
     // relation.setProperty("fkRole", "RetentionContest");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Office");
        sourceName = "Hours";
 
    target = model.getEntitySet().getByName("Schedule");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("*");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("Schedule_Hours");
     // relation.setProperty("fkRole", "Schedule");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "Hours");
        sourceName = "AnnotatedUri";
 
    target = model.getEntitySet().getByName("SpatialDimension");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
relation.setSourceCardinalityString("*");
relation.setTargetCardinalityString("*");
  
      relation.setOptionalTarget(true);
          relation.setOptionalSource(true);
      relation.setNameOnTarget("MapUri");
      
  relation.setName("SpatialDimension_MapUri");
     // relation.setProperty("fkRole", "SpatialDimension");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "MapUri");
    sourceName = "SpatialExtent";
 
    target = model.getEntitySet().getByName("SpatialDimension");
  source = model.getEntitySet().getByName(sourceName);
  relation = model.createRelation();
  relation.setSourceEntity(source);
  relation.setTargetEntity(target);
 
    relation.setSourceCardinalityString("1");
      relation.setTargetCardinalityString("1");
    
      relation.setOptionalTarget(true);
          relation.setOptionalSource(false);
        
  relation.setName("SpatialDimension_SpatialExtent");
     // relation.setProperty("fkRole", "SpatialDimension");
      // will not work for 1<->1 relations with no dominate role
    relation.setProperty("fkRole", "SpatialExtent");
                source = model.getEntitySet().getByName("VoteCounts");
    target = model.getEntitySet().getByName("Counts");
  source.setHierarchicalParent(target);
  
