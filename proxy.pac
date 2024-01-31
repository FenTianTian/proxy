function FindProxyForURL(url, host) {
  // 只有到 r.kaipoke.biz 和 api.kaipoke.biz 的流量，走54.168.84.87:8081的http/https代理
  if (shExpMatch(host, "r.kaipoke.biz") || shExpMatch(host, "api.kaipoke.biz")) {
    return "PROXY 54.168.84.87:8081";
  }
  // 其余直连
  return "DIRECT";
}