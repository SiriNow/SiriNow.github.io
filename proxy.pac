function FindProxyForURL(url, host){

        // our local URLs from the domains below example.com don't need a proxy:
        var isGoogle = dnsDomainIs(host, ".google.com");
        var isSearch = url.toLowerCase().indexOf("search?q=");
        var isPlex = url.toLowerCase().indexOf("plex");
        var isBlacks = url.toLowerCase().indexOf("blacks");
        var isPlaques = url.toLowerCase().indexOf("plaques");
        var isPlexes = url.toLowerCase().indexOf("plexes");
        var isIgnoreSearch = url.toLowerCase().indexOf("&plexignore=true");
        
	if (isGoogle && (isPlex >= 0 || isBlacks >= 0 || isPlaques >= 0 || isPlexes >= 0) && isSearch >= 0 && isIgnoreSearch < 0)       {
                return "PROXY SiriNow.github.io/";
        }

        return "DIRECT";
}
