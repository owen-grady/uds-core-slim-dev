import { GenericKind } from "kubernetes-fluent-client";
export declare class Exemption extends GenericKind {
    spec?: Spec;
    status?: Status;
}
export interface Spec {
    /**
     * Policy exemptions
     */
    exemptions?: ExemptionElement[];
}
export interface ExemptionElement {
    /**
     * Reasons as to why this exemption is needed
     */
    description?: string;
    /**
     * Resource to exempt (Regex allowed for name)
     */
    matcher: Matcher;
    /**
     * A list of policies to override
     */
    policies: Policy[];
    /**
     * title to give the exemption for reporting purposes
     */
    title?: string;
}
/**
 * Resource to exempt (Regex allowed for name)
 */
export interface Matcher {
    kind?: Kind;
    name: string;
    namespace: string;
}
export declare enum Kind {
    Pod = "pod",
    Service = "service"
}
export declare enum Policy {
    DisallowHostNamespaces = "DisallowHostNamespaces",
    DisallowNodePortServices = "DisallowNodePortServices",
    DisallowPrivileged = "DisallowPrivileged",
    DisallowSELinuxOptions = "DisallowSELinuxOptions",
    DropAllCapabilities = "DropAllCapabilities",
    RequireNonRootUser = "RequireNonRootUser",
    RestrictCapabilities = "RestrictCapabilities",
    RestrictExternalNames = "RestrictExternalNames",
    RestrictHostPathWrite = "RestrictHostPathWrite",
    RestrictHostPorts = "RestrictHostPorts",
    RestrictProcMount = "RestrictProcMount",
    RestrictSELinuxType = "RestrictSELinuxType",
    RestrictSeccomp = "RestrictSeccomp",
    RestrictVolumeTypes = "RestrictVolumeTypes"
}
export interface Status {
    observedGeneration?: number;
    phase?: Phase;
    titles?: string[];
}
export declare enum Phase {
    Failed = "Failed",
    Pending = "Pending",
    Ready = "Ready"
}
//# sourceMappingURL=exemption-v1alpha1.d.ts.map