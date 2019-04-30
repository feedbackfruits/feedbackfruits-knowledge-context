

export type duration = string;
export type integer = number;
export type decimal = number;
export module RDF {
    export type Resource = {
        id: string
    };
};
export type Thing = RDF.Resource;
export type SemanticTag = RDF.Resource;
export type Annotation = Tag & {
    startPosition: integer
    confidence: decimal
    detectedAs: string
};

export type VideoAnnotation = Annotation & {
    startDuration: duration
};

export type DocumentAnnotation = Annotation & {
    pageNumber: integer
    boundingBox: string[]
};

export type License = RDF.Resource & {

};

export type Document = (Resource & (Taggable & MediaObject)) & {

};

export type Resource = CreativeWork & {
    topic: Topic[]
    tag: Tag[]
    annotation: Annotation[]
    contentLength: integer
    contentDuration: duration
};

export type Video = (VideoObject & (Resource & Taggable)) & {
    caption: VideoCaption[]
};

export type VideoCaption = (CreativeWork & Taggable) & {
    captionOf: Video[]
    startsAfter: duration
    duration: duration
    language: string
};

export type Entity = RDF.Resource & {
    sameAsFieldOfStudy: FieldOfStudy[]
    subjectOf: Tag[]
    name: string
    description: string
};

export type FieldOfStudy = RDF.Resource & {
    sameAsEntity: Entity[]
    resource: Resource[]
    fieldLevel: integer
    parentFieldOfStudy: FieldOfStudy[]
    childFieldOfStudy: FieldOfStudy[]
    relatedFieldOfStudy: FieldOfStudy[]
    relatesToFieldOfStudy: FieldOfStudy[]
    name: string
    description: string
    image: ImageObject[]
};

export type Organization = RDF.Resource & {

};

export type CreativeWork = RDF.Resource & {
    name: string
    description: string
    image: ImageObject[]
    license: License[]
    sourceOrganization: Organization[]
    text: string
    encoding: MediaObject[]
};

export type MediaObject = CreativeWork & {
    encodesCreativeWork: CreativeWork
    contentUrl: Thing
    encodingFormat: string
};

export type ImageObject = MediaObject & {

};

export type VideoObject = MediaObject & {

};

export type SearchResult = Resource & {
    score: decimal
};

export type Tag = RDF.Resource & {
    tagOf: Taggable
    about: Entity
    score: decimal
};

export type Taggable = RDF.Resource & {
    tag: Tag[]
    annotation: Annotation[]
};

export type Topic = CreativeWork & {
    resource: Resource[]
    previous: Topic[]
    next: Topic[]
    parent: Topic[]
    child: Topic[]
};

