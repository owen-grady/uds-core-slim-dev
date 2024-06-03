import { V1OwnerReference } from "@kubernetes/client-node";
import { GenericKind } from "kubernetes-fluent-client";
/**
 * Sanitize a resource name to make it a valid Kubernetes resource name.
 *
 * @param name the name of the resource to sanitize
 * @returns the sanitized resource name
 */
export declare function sanitizeResourceName(name: string): string;
/**
 * Get the owner reference for a custom resource
 * @param cr the custom resource to get the owner reference for
 * @returns the owner reference for the custom resource
 */
export declare function getOwnerRef(cr: GenericKind): V1OwnerReference[];
//# sourceMappingURL=utils.d.ts.map