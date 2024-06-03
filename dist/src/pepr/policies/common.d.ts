import { KubernetesObject, V1Container, V1SecurityContext } from "@kubernetes/client-node";
import { Capability, PeprMutateRequest, PeprValidateRequest, a } from "pepr";
import { Policy } from "../operator/crd";
export type Ctx = {
    name?: string;
    ctx: V1SecurityContext;
};
export declare const policies: Capability;
export declare const Store: import("pepr/dist/lib/storage").PeprStore, When: <T extends import("kubernetes-fluent-client").GenericClass>(model: T, kind?: import("kubernetes-fluent-client").GroupVersionKind | undefined) => import("pepr/dist/lib/types").WhenSelector<T>;
export declare function volumes(request: PeprValidateRequest<a.Pod>): import("@kubernetes/client-node").V1Volume[];
export declare function containers(request: PeprValidateRequest<a.Pod> | PeprMutateRequest<a.Pod>): (V1Container | import("@kubernetes/client-node").V1EphemeralContainer)[];
/**
 * Returns all containers in the pod that have a securityContext
 *
 * @param request
 * @returns Map of container name to securityContext
 */
export declare function securityContextContainers(request: PeprValidateRequest<a.Pod>): Ctx[];
export declare function securityContextMessage(msg: string, authorized: (string | undefined)[], ctx: Ctx[]): string;
/**
 * Returns true if the container looks like an istio init container
 *
 * @param request the request to check
 * @param container the container to check
 * @returns
 */
export declare function isIstioInitContainer(request: PeprValidateRequest<a.Pod> | PeprMutateRequest<a.Pod>, container?: V1Container): boolean;
export declare function annotateMutation<T extends KubernetesObject>(request: PeprMutateRequest<T>, policy: Policy): void;
//# sourceMappingURL=common.d.ts.map