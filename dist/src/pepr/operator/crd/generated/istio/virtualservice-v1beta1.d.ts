import { GenericKind } from "kubernetes-fluent-client";
export declare class VirtualService extends GenericKind {
    /**
     * Configuration affecting label/content routing, sni routing, etc. See more details at:
     * https://istio.io/docs/reference/config/networking/virtual-service.html
     */
    spec?: Spec;
    status?: {
        [key: string]: unknown;
    };
}
/**
 * Configuration affecting label/content routing, sni routing, etc. See more details at:
 * https://istio.io/docs/reference/config/networking/virtual-service.html
 */
export interface Spec {
    /**
     * A list of namespaces to which this virtual service is exported.
     */
    exportTo?: string[];
    /**
     * The names of gateways and sidecars that should apply these routes.
     */
    gateways?: string[];
    /**
     * The destination hosts to which traffic is being sent.
     */
    hosts?: string[];
    /**
     * An ordered list of route rules for HTTP traffic.
     */
    http?: HTTP[];
    /**
     * An ordered list of route rules for opaque TCP traffic.
     */
    tcp?: TCP[];
    /**
     * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
     */
    tls?: Tl[];
}
export interface HTTP {
    /**
     * Cross-Origin Resource Sharing policy (CORS).
     */
    corsPolicy?: CorsPolicy;
    /**
     * Delegate is used to specify the particular VirtualService which can be used to define
     * delegate HTTPRoute.
     */
    delegate?: Delegate;
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    directResponse?: DirectResponse;
    /**
     * Fault injection policy to apply on HTTP traffic at the client side.
     */
    fault?: Fault;
    headers?: HTTPHeaders;
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match?: HTTPMatch[];
    /**
     * Mirror HTTP traffic to a another destination in addition to forwarding the requests to
     * the intended destination.
     */
    mirror?: PurpleMirror;
    mirror_percent?: number;
    mirrorPercent?: number;
    /**
     * Percentage of the traffic to be mirrored by the `mirror` field.
     */
    mirrorPercentage?: MirrorPercentageObject;
    /**
     * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
     */
    mirrors?: MirrorElement[];
    /**
     * The name assigned to the route for debugging purposes.
     */
    name?: string;
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    redirect?: Redirect;
    /**
     * Retry policy for HTTP requests.
     */
    retries?: Retries;
    /**
     * Rewrite HTTP URIs and Authority headers.
     */
    rewrite?: Rewrite;
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    route?: HTTPRoute[];
    /**
     * Timeout for HTTP requests, default is disabled.
     */
    timeout?: string;
}
/**
 * Cross-Origin Resource Sharing policy (CORS).
 */
export interface CorsPolicy {
    /**
     * Indicates whether the caller is allowed to send the actual request (not the preflight)
     * using credentials.
     */
    allowCredentials?: boolean;
    /**
     * List of HTTP headers that can be used when requesting the resource.
     */
    allowHeaders?: string[];
    /**
     * List of HTTP methods allowed to access the resource.
     */
    allowMethods?: string[];
    allowOrigin?: string[];
    /**
     * String patterns that match allowed origins.
     */
    allowOrigins?: AllowOrigin[];
    /**
     * A list of HTTP headers that the browsers are allowed to access.
     */
    exposeHeaders?: string[];
    /**
     * Specifies how long the results of a preflight request can be cached.
     */
    maxAge?: string;
}
export interface AllowOrigin {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
/**
 * Delegate is used to specify the particular VirtualService which can be used to define
 * delegate HTTPRoute.
 */
export interface Delegate {
    /**
     * Name specifies the name of the delegate VirtualService.
     */
    name?: string;
    /**
     * Namespace specifies the namespace where the delegate VirtualService resides.
     */
    namespace?: string;
}
/**
 * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
 */
export interface DirectResponse {
    /**
     * Specifies the content of the response body.
     */
    body?: Body;
    /**
     * Specifies the HTTP response status to be returned.
     */
    status?: number;
}
/**
 * Specifies the content of the response body.
 */
export interface Body {
    /**
     * response body as base64 encoded bytes.
     */
    bytes?: string;
    string?: string;
}
/**
 * Fault injection policy to apply on HTTP traffic at the client side.
 */
export interface Fault {
    /**
     * Abort Http request attempts and return error codes back to downstream service, giving the
     * impression that the upstream service is faulty.
     */
    abort?: Abort;
    /**
     * Delay requests before forwarding, emulating various failures such as network issues,
     * overloaded upstream service, etc.
     */
    delay?: Delay;
}
/**
 * Abort Http request attempts and return error codes back to downstream service, giving the
 * impression that the upstream service is faulty.
 */
export interface Abort {
    /**
     * GRPC status code to use to abort the request.
     */
    grpcStatus?: string;
    http2Error?: string;
    /**
     * HTTP status code to use to abort the Http request.
     */
    httpStatus?: number;
    /**
     * Percentage of requests to be aborted with the error code provided.
     */
    percentage?: AbortPercentage;
}
/**
 * Percentage of requests to be aborted with the error code provided.
 */
export interface AbortPercentage {
    value?: number;
}
/**
 * Delay requests before forwarding, emulating various failures such as network issues,
 * overloaded upstream service, etc.
 */
export interface Delay {
    exponentialDelay?: string;
    /**
     * Add a fixed delay before forwarding the request.
     */
    fixedDelay?: string;
    /**
     * Percentage of requests on which the delay will be injected (0-100).
     */
    percent?: number;
    /**
     * Percentage of requests on which the delay will be injected.
     */
    percentage?: DelayPercentage;
}
/**
 * Percentage of requests on which the delay will be injected.
 */
export interface DelayPercentage {
    value?: number;
}
export interface HTTPHeaders {
    request?: PurpleRequest;
    response?: PurpleResponse;
}
export interface PurpleRequest {
    add?: {
        [key: string]: string;
    };
    remove?: string[];
    set?: {
        [key: string]: string;
    };
}
export interface PurpleResponse {
    add?: {
        [key: string]: string;
    };
    remove?: string[];
    set?: {
        [key: string]: string;
    };
}
export interface HTTPMatch {
    /**
     * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for
     * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
     * style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    authority?: Authority;
    /**
     * Names of gateways where the rule should be applied.
     */
    gateways?: string[];
    /**
     * The header keys must be lowercase and use hyphen as the separator, e.g.
     */
    headers?: {
        [key: string]: Header;
    };
    /**
     * Flag to specify whether the URI matching should be case-insensitive.
     */
    ignoreUriCase?: boolean;
    /**
     * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for
     * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
     * style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    method?: Method;
    /**
     * The name assigned to a match.
     */
    name?: string;
    /**
     * Specifies the ports on the host that is being addressed.
     */
    port?: number;
    /**
     * Query parameters for matching.
     */
    queryParams?: {
        [key: string]: QueryParam;
    };
    /**
     * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for
     * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
     * style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    scheme?: Scheme;
    /**
     * One or more labels that constrain the applicability of a rule to source (client)
     * workloads with the given labels.
     */
    sourceLabels?: {
        [key: string]: string;
    };
    /**
     * Source namespace constraining the applicability of a rule to workloads in that namespace.
     */
    sourceNamespace?: string;
    /**
     * The human readable prefix to use when emitting statistics for this route.
     */
    statPrefix?: string;
    /**
     * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for
     * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
     * style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    uri?: URI;
    /**
     * withoutHeader has the same syntax with the header, but has opposite meaning.
     */
    withoutHeaders?: {
        [key: string]: WithoutHeader;
    };
}
/**
 * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for
 * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
 * style regex-based match (https://github.com/google/re2/wiki/Syntax).
 */
export interface Authority {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
export interface Header {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
/**
 * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for
 * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
 * style regex-based match (https://github.com/google/re2/wiki/Syntax).
 */
export interface Method {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
export interface QueryParam {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
/**
 * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for
 * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
 * style regex-based match (https://github.com/google/re2/wiki/Syntax).
 */
export interface Scheme {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
/**
 * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for
 * exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for RE2
 * style regex-based match (https://github.com/google/re2/wiki/Syntax).
 */
export interface URI {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
export interface WithoutHeader {
    exact?: string;
    prefix?: string;
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    regex?: string;
}
/**
 * Mirror HTTP traffic to a another destination in addition to forwarding the requests to
 * the intended destination.
 */
export interface PurpleMirror {
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: MirrorPort;
    /**
     * The name of a subset within the service.
     */
    subset?: string;
}
/**
 * Specifies the port on the host that is being addressed.
 */
export interface MirrorPort {
    number?: number;
}
/**
 * Percentage of the traffic to be mirrored by the `mirror` field.
 */
export interface MirrorPercentageObject {
    value?: number;
}
export interface MirrorElement {
    /**
     * Destination specifies the target of the mirror operation.
     */
    destination?: MirrorDestination;
    /**
     * Percentage of the traffic to be mirrored by the `destination` field.
     */
    percentage?: MirrorPercentage;
}
/**
 * Destination specifies the target of the mirror operation.
 */
export interface MirrorDestination {
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: PurplePort;
    /**
     * The name of a subset within the service.
     */
    subset?: string;
}
/**
 * Specifies the port on the host that is being addressed.
 */
export interface PurplePort {
    number?: number;
}
/**
 * Percentage of the traffic to be mirrored by the `destination` field.
 */
export interface MirrorPercentage {
    value?: number;
}
/**
 * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
 */
export interface Redirect {
    /**
     * On a redirect, overwrite the Authority/Host portion of the URL with this value.
     */
    authority?: string;
    /**
     * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80
     * for HTTP and 443 for HTTPS.
     */
    derivePort?: DerivePort;
    /**
     * On a redirect, overwrite the port portion of the URL with this value.
     */
    port?: number;
    /**
     * On a redirect, Specifies the HTTP status code to use in the redirect response.
     */
    redirectCode?: number;
    /**
     * On a redirect, overwrite the scheme portion of the URL with this value.
     */
    scheme?: string;
    /**
     * On a redirect, overwrite the Path portion of the URL with this value.
     */
    uri?: string;
}
/**
 * On a redirect, dynamically set the port: * FROM_PROTOCOL_DEFAULT: automatically set to 80
 * for HTTP and 443 for HTTPS.
 */
export declare enum DerivePort {
    FromProtocolDefault = "FROM_PROTOCOL_DEFAULT",
    FromRequestPort = "FROM_REQUEST_PORT"
}
/**
 * Retry policy for HTTP requests.
 */
export interface Retries {
    /**
     * Number of retries to be allowed for a given request.
     */
    attempts?: number;
    /**
     * Timeout per attempt for a given request, including the initial call and any retries.
     */
    perTryTimeout?: string;
    /**
     * Specifies the conditions under which retry takes place.
     */
    retryOn?: string;
    /**
     * Flag to specify whether the retries should retry to other localities.
     */
    retryRemoteLocalities?: boolean;
}
/**
 * Rewrite HTTP URIs and Authority headers.
 */
export interface Rewrite {
    /**
     * rewrite the Authority/Host header with this value.
     */
    authority?: string;
    /**
     * rewrite the path (or the prefix) portion of the URI with this value.
     */
    uri?: string;
    /**
     * rewrite the path portion of the URI with the specified regex.
     */
    uriRegexRewrite?: URIRegexRewrite;
}
/**
 * rewrite the path portion of the URI with the specified regex.
 */
export interface URIRegexRewrite {
    /**
     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
     */
    match?: string;
    /**
     * The string that should replace into matching portions of original URI.
     */
    rewrite?: string;
}
export interface HTTPRoute {
    /**
     * Destination uniquely identifies the instances of a service to which the
     * request/connection should be forwarded to.
     */
    destination?: PurpleDestination;
    headers?: RouteHeaders;
    /**
     * Weight specifies the relative proportion of traffic to be forwarded to the destination.
     */
    weight?: number;
}
/**
 * Destination uniquely identifies the instances of a service to which the
 * request/connection should be forwarded to.
 */
export interface PurpleDestination {
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: FluffyPort;
    /**
     * The name of a subset within the service.
     */
    subset?: string;
}
/**
 * Specifies the port on the host that is being addressed.
 */
export interface FluffyPort {
    number?: number;
}
export interface RouteHeaders {
    request?: FluffyRequest;
    response?: FluffyResponse;
}
export interface FluffyRequest {
    add?: {
        [key: string]: string;
    };
    remove?: string[];
    set?: {
        [key: string]: string;
    };
}
export interface FluffyResponse {
    add?: {
        [key: string]: string;
    };
    remove?: string[];
    set?: {
        [key: string]: string;
    };
}
export interface TCP {
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match?: TCPMatch[];
    /**
     * The destination to which the connection should be forwarded to.
     */
    route?: TCPRoute[];
}
export interface TCPMatch {
    /**
     * IPv4 or IPv6 ip addresses of destination with optional subnet.
     */
    destinationSubnets?: string[];
    /**
     * Names of gateways where the rule should be applied.
     */
    gateways?: string[];
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: number;
    /**
     * One or more labels that constrain the applicability of a rule to workloads with the given
     * labels.
     */
    sourceLabels?: {
        [key: string]: string;
    };
    /**
     * Source namespace constraining the applicability of a rule to workloads in that namespace.
     */
    sourceNamespace?: string;
    sourceSubnet?: string;
}
export interface TCPRoute {
    /**
     * Destination uniquely identifies the instances of a service to which the
     * request/connection should be forwarded to.
     */
    destination?: FluffyDestination;
    /**
     * Weight specifies the relative proportion of traffic to be forwarded to the destination.
     */
    weight?: number;
}
/**
 * Destination uniquely identifies the instances of a service to which the
 * request/connection should be forwarded to.
 */
export interface FluffyDestination {
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: TentacledPort;
    /**
     * The name of a subset within the service.
     */
    subset?: string;
}
/**
 * Specifies the port on the host that is being addressed.
 */
export interface TentacledPort {
    number?: number;
}
export interface Tl {
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match?: TlMatch[];
    /**
     * The destination to which the connection should be forwarded to.
     */
    route?: TlRoute[];
}
export interface TlMatch {
    /**
     * IPv4 or IPv6 ip addresses of destination with optional subnet.
     */
    destinationSubnets?: string[];
    /**
     * Names of gateways where the rule should be applied.
     */
    gateways?: string[];
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: number;
    /**
     * SNI (server name indicator) to match on.
     */
    sniHosts?: string[];
    /**
     * One or more labels that constrain the applicability of a rule to workloads with the given
     * labels.
     */
    sourceLabels?: {
        [key: string]: string;
    };
    /**
     * Source namespace constraining the applicability of a rule to workloads in that namespace.
     */
    sourceNamespace?: string;
}
export interface TlRoute {
    /**
     * Destination uniquely identifies the instances of a service to which the
     * request/connection should be forwarded to.
     */
    destination?: TentacledDestination;
    /**
     * Weight specifies the relative proportion of traffic to be forwarded to the destination.
     */
    weight?: number;
}
/**
 * Destination uniquely identifies the instances of a service to which the
 * request/connection should be forwarded to.
 */
export interface TentacledDestination {
    /**
     * The name of a service from the service registry.
     */
    host?: string;
    /**
     * Specifies the port on the host that is being addressed.
     */
    port?: StickyPort;
    /**
     * The name of a subset within the service.
     */
    subset?: string;
}
/**
 * Specifies the port on the host that is being addressed.
 */
export interface StickyPort {
    number?: number;
}
//# sourceMappingURL=virtualservice-v1beta1.d.ts.map