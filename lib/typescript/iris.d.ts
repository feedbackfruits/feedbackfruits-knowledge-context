export declare module iris {
    module $ {
        const Annotation = "https://knowledge.express/Annotation";
        const Tag = "https://knowledge.express/Tag";
        const startPosition = "https://knowledge.express/startPosition";
        const confidence = "https://knowledge.express/confidence";
        const detectedAs = "https://knowledge.express/detectedAs";
        const VideoAnnotation = "https://knowledge.express/VideoAnnotation";
        const startDuration = "https://knowledge.express/startDuration";
        const DocumentAnnotation = "https://knowledge.express/DocumentAnnotation";
        const pageNumber = "https://knowledge.express/pageNumber";
        const boundingBox = "https://knowledge.express/boundingBox";
        const Document = "https://knowledge.express/Document";
        const Resource = "https://knowledge.express/Resource";
        const Taggable = "https://knowledge.express/Taggable";
        const numPages = "https://knowledge.express/numPages";
        const topic = "https://knowledge.express/topic";
        const Topic = "https://knowledge.express/Topic";
        const resource = "https://knowledge.express/resource";
        const tag = "https://knowledge.express/tag";
        const annotation = "https://knowledge.express/annotation";
        const contentLength = "https://knowledge.express/contentLength";
        const contentDuration = "https://knowledge.express/contentDuration";
        const educationalLevel = "https://knowledge.express/educationalLevel";
        const Video = "https://knowledge.express/Video";
        const caption = "https://knowledge.express/caption";
        const VideoCaption = "https://knowledge.express/VideoCaption";
        const captionOf = "https://knowledge.express/captionOf";
        const startsAfter = "https://knowledge.express/startsAfter";
        const duration = "https://knowledge.express/duration";
        const language = "https://knowledge.express/language";
        const WebPageResource = "https://knowledge.express/WebPageResource";
        const Entity = "https://knowledge.express/Entity";
        const sameAsFieldOfStudy = "https://knowledge.express/sameAsFieldOfStudy";
        const sameAsEntity = "https://knowledge.express/sameAsEntity";
        const subjectOf = "https://knowledge.express/subjectOf";
        const about = "https://knowledge.express/about";
        const SearchResult = "https://knowledge.express/SearchResult";
        const result = "https://knowledge.express/result";
        const score = "https://knowledge.express/score";
        const tagOf = "https://knowledge.express/tagOf";
        const previous = "https://knowledge.express/previous";
        const next = "https://knowledge.express/next";
        const parent = "https://knowledge.express/parent";
        const child = "https://knowledge.express/child";
    }
    module rdf {
        const type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
        const subClassOf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#subClassOf";
    }
    module owl {
        const Class = "http://www.w3.org/2002/07/owl#Class";
        const ObjectProperty = "http://www.w3.org/2002/07/owl#ObjectProperty";
        const FunctionalProperty = "http://www.w3.org/2002/07/owl#FunctionalProperty";
        const inverseOf = "http://www.w3.org/2002/07/owl#inverseOf";
        const Thing = "http://www.w3.org/2002/07/owl#Thing";
        const sameAs = "http://www.w3.org/2002/07/owl#sameAs";
    }
    module rdfs {
        const subClassOf = "http://www.w3.org/2000/01/rdf-schema#subClassOf";
        const domain = "http://www.w3.org/2000/01/rdf-schema#domain";
        const range = "http://www.w3.org/2000/01/rdf-schema#range";
        const subPropertyOf = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf";
    }
    module xsd {
        const integer = "http://www.w3.org/2001/XMLSchema#integer";
        const decimal = "http://www.w3.org/2001/XMLSchema#decimal";
        const string = "http://www.w3.org/2001/XMLSchema#string";
        const duration = "http://www.w3.org/2001/XMLSchema#duration";
    }
    module cc {
        const License = "http://creativecommons.org/ns#License";
    }
    module schema {
        const MediaObject = "http://schema.org/MediaObject";
        const CreativeWork = "http://schema.org/CreativeWork";
        const VideoObject = "http://schema.org/VideoObject";
        const inLanguage = "http://schema.org/inLanguage";
        const WebPage = "http://schema.org/WebPage";
        const subjectOf = "http://schema.org/subjectOf";
        const name = "http://schema.org/name";
        const description = "http://schema.org/description";
        const Organization = "http://schema.org/Organization";
        const keywords = "http://schema.org/keywords";
        const image = "http://schema.org/image";
        const ImageObject = "http://schema.org/ImageObject";
        const license = "http://schema.org/license";
        const sourceOrganization = "http://schema.org/sourceOrganization";
        const author = "http://schema.org/author";
        const contributor = "http://schema.org/contributor";
        const text = "http://schema.org/text";
        const encoding = "http://schema.org/encoding";
        const encodesCreativeWork = "http://schema.org/encodesCreativeWork";
        const learningResourceType = "http://schema.org/learningResourceType";
        const dateCreated = "http://schema.org/dateCreated";
        const contentUrl = "http://schema.org/contentUrl";
        const encodingFormat = "http://schema.org/encodingFormat";
        const Person = "http://schema.org/Person";
        const about = "http://schema.org/about";
    }
    module mag {
        const FieldOfStudy = "http://academic.microsoft.com/FieldOfStudy";
        const fieldLevel = "http://academic.microsoft.com/fieldLevel";
        const parentFieldOfStudy = "http://academic.microsoft.com/parentFieldOfStudy";
        const childFieldOfStudy = "http://academic.microsoft.com/childFieldOfStudy";
        const relatedFieldOfStudy = "http://academic.microsoft.com/relatedFieldOfStudy";
        const relatesToFieldOfStudy = "http://academic.microsoft.com/relatesToFieldOfStudy";
    }
    module oa {
        const SemanticTag = "http://www.w3.org/ns/oa#SemanticTag";
    }
}
