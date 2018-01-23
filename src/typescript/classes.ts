
export type duration = string;
export type integer = number;
export type decimal = number;
export type Annotation = Tag & {
    startPosition: integer
    confidence: decimal
    detectedAs: string
};

export type CreativeWork = {
    name: string
    description: string
    image: string[]
    license: string[]
    sourceOrganization: string[]
    text: string[]
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

export type VideoCaption = Taggable & {
    captionOf: Video[]
    startsAfter: duration
    duration: duration
};

export type Entity = {
    fieldOfStudy: FieldOfStudy[]
    tag: Tag[]
    annotation: Annotation[]
    name: string
    description: string
};

export type FieldOfStudy = {
    entity: Entity[]
    name: string
    description: string
    image: string[]
    resource: Resource[]
    parentFieldOfStudy: FieldOfStudy[]
    childFieldOfStudy: FieldOfStudy[]
};

export type Tag = {
    resource: Resource[]
    entity: Entity[]
    score: decimal
};

export type Taggable = {
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

