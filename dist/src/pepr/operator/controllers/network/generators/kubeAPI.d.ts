import { V1NetworkPolicyPeer } from "@kubernetes/client-node";
import { kind } from "pepr";
/**
 * Initialize the API server CIDR by getting the EndpointSlice and Service for the API server
 */
export declare function initAPIServerCIDR(): Promise<void>;
/**
 * Get the API server CIDR
 * @returns The API server CIDR
 */
export declare function kubeAPI(): V1NetworkPolicyPeer[];
/**
 * When the kubernetes EndpointSlice is created or updated, update the API server CIDR
 * @param slice The EndpointSlice for the API server
 */
export declare function updateAPIServerCIDRFromEndpointSlice(slice: kind.EndpointSlice): Promise<void>;
/**
 * When the kubernetes Service is created or updated, update the API server CIDR
 * @param svc The Service for the API server
 */
export declare function updateAPIServerCIDRFromService(svc: kind.Service): Promise<void>;
/**
 * Update the API server CIDR and update the NetworkPolicies
 *
 * @param slice The EndpointSlice for the API server
 * @param svc The Service for the API server
 */
export declare function updateAPIServerCIDR(slice: kind.EndpointSlice, svc: kind.Service): Promise<void>;
//# sourceMappingURL=kubeAPI.d.ts.map