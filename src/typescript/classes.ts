

export type duration = string;
export type integer = number;
export type decimal = number;
export module RDF {
    export type Resource = {
        id: string
    };
};
export type VideoObject = RDF.Resource;
export type Thing = RDF.Resource;
export type ImageObject = RDF.Resource;
export type License = RDF.Resource;
export type Organization = RDF.Resource;
export type SemanticTag = RDF.Resource;
export type Annotation = Tag & {
    startPosition: integer
    confidence: decimal
    detectedAs: string
};

export type Document = (Resource & Taggable) & {
    section: DocumentSection[]
};

export type DocumentSection = CreativeWork & {
    sectionOf: Document[]
    startPosition: integer
    endPosition: integer
};

export type Resource = CreativeWork & {
    topic: Topic[]
    tag: Tag[]
    annotation: Annotation[]
};

export type Video = (Resource & Taggable) & {
    caption: VideoCaption[]
};

export type VideoCaption = (CreativeWork & Taggable) & {
    captionOf: Video[]
    startsAfter: duration
    duration: duration
    language: string
};

export type Entity = RDF.Resource & {
    sameAsEntity: FieldOfStudy[]
    subjectOf: Tag[]
    name: string
    description: string
};

export type FieldOfStudy = RDF.Resource & {
    sameAsFieldOfStudy: Entity[]
    resource: Resource[]
    parentFieldOfStudy: FieldOfStudy[]
    childFieldOfStudy: FieldOfStudy[]
    name: string
    description: string
    image: ImageObject[]
};

export type CreativeWork = RDF.Resource & {
    name: string
    description: string
    image: ImageObject[]
    license: License[]
    sourceOrganization: Organization[]
    text: string
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

