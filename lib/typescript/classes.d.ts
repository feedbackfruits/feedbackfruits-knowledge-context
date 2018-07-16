export declare type duration = string;
export declare type integer = number;
export declare type decimal = number;
export declare module RDF {
    type Resource = {
        id: string;
    };
}
export declare type Thing = RDF.Resource;
export declare type SemanticTag = RDF.Resource;
export declare type Annotation = Tag & {
    startPosition: integer;
    confidence: decimal;
    detectedAs: string;
    startDuration: duration;
};
export declare type VideoAnnotation = Annotation & {};
export declare type License = RDF.Resource & {};
export declare type Document = (Resource & (Taggable & MediaObject)) & {};
export declare type Resource = CreativeWork & {
    topic: Topic[];
    tag: Tag[];
    annotation: Annotation[];
    contentLength: integer;
    contentDuration: duration;
};
export declare type Video = (VideoObject & (Resource & Taggable)) & {
    caption: VideoCaption[];
};
export declare type VideoCaption = (CreativeWork & Taggable) & {
    captionOf: Video[];
    startsAfter: duration;
    duration: duration;
    language: string;
};
export declare type Entity = RDF.Resource & {
    sameAsEntity: FieldOfStudy[];
    subjectOf: Tag[];
    name: string;
    description: string;
};
export declare type FieldOfStudy = RDF.Resource & {
    sameAsFieldOfStudy: Entity[];
    resource: Resource[];
    parentFieldOfStudy: FieldOfStudy[];
    childFieldOfStudy: FieldOfStudy[];
    name: string;
    description: string;
    image: ImageObject[];
};
export declare type Organization = RDF.Resource & {};
export declare type CreativeWork = RDF.Resource & {
    name: string;
    description: string;
    image: ImageObject[];
    license: License[];
    sourceOrganization: Organization[];
    text: string;
    encoding: MediaObject[];
};
export declare type MediaObject = CreativeWork & {
    encodesCreativeWork: CreativeWork;
    contentUrl: Thing;
    encodingFormat: string;
};
export declare type ImageObject = MediaObject & {};
export declare type VideoObject = MediaObject & {};
export declare type Tag = RDF.Resource & {
    tagOf: Taggable;
    about: Entity;
    score: decimal;
};
export declare type Taggable = RDF.Resource & {
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
