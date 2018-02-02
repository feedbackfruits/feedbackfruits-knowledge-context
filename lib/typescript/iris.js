"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iris;
(function (iris) {
    let $;
    (function ($) {
        $.Annotation = "https://knowledge.express/Annotation";
        $.Tag = "https://knowledge.express/Tag";
        $.startPosition = "https://knowledge.express/startPosition";
        $.confidence = "https://knowledge.express/confidence";
        $.detectedAs = "https://knowledge.express/detectedAs";
        $.Document = "https://knowledge.express/Document";
        $.Resource = "https://knowledge.express/Resource";
        $.Taggable = "https://knowledge.express/Taggable";
        $.section = "https://knowledge.express/section";
        $.DocumentSection = "https://knowledge.express/DocumentSection";
        $.sectionOf = "https://knowledge.express/sectionOf";
        $.endPosition = "https://knowledge.express/endPosition";
        $.topic = "https://knowledge.express/topic";
        $.Topic = "https://knowledge.express/Topic";
        $.resource = "https://knowledge.express/resource";
        $.tag = "https://knowledge.express/tag";
        $.annotation = "https://knowledge.express/annotation";
        $.Video = "https://knowledge.express/Video";
        $.caption = "https://knowledge.express/caption";
        $.VideoCaption = "https://knowledge.express/VideoCaption";
        $.captionOf = "https://knowledge.express/captionOf";
        $.startsAfter = "https://knowledge.express/startsAfter";
        $.duration = "https://knowledge.express/duration";
        $.language = "https://knowledge.express/language";
        $.Entity = "https://knowledge.express/Entity";
        $.fieldOfStudy = "https://knowledge.express/fieldOfStudy";
        $.entity = "https://knowledge.express/entity";
        $.score = "https://knowledge.express/score";
        $.subjectOf = "https://knowledge.express/subjectOf";
        $.about = "https://knowledge.express/about";
        $.previous = "https://knowledge.express/previous";
        $.next = "https://knowledge.express/next";
        $.parent = "https://knowledge.express/parent";
        $.child = "https://knowledge.express/child";
    })($ = iris.$ || (iris.$ = {}));
    ;
    let rdf;
    (function (rdf) {
        rdf.type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
    })(rdf = iris.rdf || (iris.rdf = {}));
    ;
    let owl;
    (function (owl) {
        owl.Class = "http://www.w3.org/2002/07/owl#Class";
        owl.ObjectProperty = "http://www.w3.org/2002/07/owl#ObjectProperty";
        owl.FunctionalProperty = "http://www.w3.org/2002/07/owl#FunctionalProperty";
        owl.inverseOf = "http://www.w3.org/2002/07/owl#inverseOf";
        owl.DatatypeProperty = "http://www.w3.org/2002/07/owl#DatatypeProperty";
        owl.Thing = "http://www.w3.org/2002/07/owl#Thing";
        owl.sameAs = "http://www.w3.org/2002/07/owl#sameAs";
    })(owl = iris.owl || (iris.owl = {}));
    ;
    let rdfs;
    (function (rdfs) {
        rdfs.subClassOf = "http://www.w3.org/2000/01/rdf-schema#subClassOf";
        rdfs.domain = "http://www.w3.org/2000/01/rdf-schema#domain";
        rdfs.range = "http://www.w3.org/2000/01/rdf-schema#range";
        rdfs.subPropertyOf = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf";
    })(rdfs = iris.rdfs || (iris.rdfs = {}));
    ;
    let xsd;
    (function (xsd) {
        xsd.integer = "http://www.w3.org/2001/XMLSchema#integer";
        xsd.decimal = "http://www.w3.org/2001/XMLSchema#decimal";
        xsd.string = "http://www.w3.org/2001/XMLSchema#string";
        xsd.duration = "http://www.w3.org/2001/XMLSchema#duration";
    })(xsd = iris.xsd || (iris.xsd = {}));
    ;
    let schema;
    (function (schema) {
        schema.CreativeWork = "http://schema.org/CreativeWork";
        schema.VideoObject = "http://schema.org/VideoObject";
        schema.inLanguage = "http://schema.org/inLanguage";
        schema.name = "http://schema.org/name";
        schema.description = "http://schema.org/description";
        schema.image = "http://schema.org/image";
        schema.ImageObject = "http://schema.org/ImageObject";
        schema.license = "http://schema.org/license";
        schema.sourceOrganization = "http://schema.org/sourceOrganization";
        schema.Organization = "http://schema.org/Organization";
        schema.text = "http://schema.org/text";
        schema.about = "http://schema.org/about";
    })(schema = iris.schema || (iris.schema = {}));
    ;
    let mag;
    (function (mag) {
        mag.FieldOfStudy = "http://academic.microsoft.com/FieldOfStudy";
        mag.parentFieldOfStudy = "http://academic.microsoft.com/parentFieldOfStudy";
        mag.childFieldOfStudy = "http://academic.microsoft.com/childFieldOfStudy";
    })(mag = iris.mag || (iris.mag = {}));
    ;
    let cc;
    (function (cc) {
        cc.License = "http://creativecommons.org/ns#License";
    })(cc = iris.cc || (iris.cc = {}));
    ;
    let oa;
    (function (oa) {
        oa.SemanticTag = "http://www.w3.org/ns/oa#SemanticTag";
    })(oa = iris.oa || (iris.oa = {}));
    ;
})(iris = exports.iris || (exports.iris = {}));
;
