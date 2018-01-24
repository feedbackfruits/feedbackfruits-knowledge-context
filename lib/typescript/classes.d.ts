export declare type duration = string;
export declare type integer = number;
export declare type decimal = number;
export declare type Annotation = Tag & {
    startPosition: integer;
    confidence: decimal;
    detectedAs: string;
};
export declare type CreativeWork = {
    name: string;
    description: string;
    image: string[];
    license: string[];
    sourceOrganization: string[];
    text: string[];
};
export declare type Document = (Resource & Taggable) & {
    section: DocumentSection[];
};
export declare type DocumentSection = CreativeWork & {
    sectionOf: Document[];
    startPosition: integer;
    endPosition: integer;
};
export declare type Resource = CreativeWork & {
    topic: Topic[];
    tag: Tag[];
    annotation: Annotation[];
};
export declare type Video = (Resource & Taggable) & {
    caption: VideoCaption[];
};
export declare type VideoCaption = (CreativeWork & Taggable) & {
    captionOf: Video[];
    startsAfter: duration;
    duration: duration;
};
export declare type Entity = {
    fieldOfStudy: FieldOfStudy[];
    tag: Tag[];
    annotation: Annotation[];
    name: string;
    description: string;
};
export declare type FieldOfStudy = {
    entity: Entity[];
    name: string;
    description: string;
    image: string[];
    resource: Resource[];
    parentFieldOfStudy: FieldOfStudy[];
    childFieldOfStudy: FieldOfStudy[];
};
export declare type Tag = {
    resource: Resource[];
    entity: Entity[];
    score: decimal;
};
export declare type Taggable = {
    tag: Tag[];
    annotation: Annotation[];
};
export declare type Topic = CreativeWork & {
    resource: Resource[];
    previous: Topic[];
    next: Topic[];
    parent: Topic[];
    child: Topic[];
};
