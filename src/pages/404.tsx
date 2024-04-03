import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isDynamicRoute } from "next/dist/shared/lib/router/utils";
import { getRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";
import { getClientBuildManifest } from "next/dist/client/route-loader";

async function pageExists(location: string) {
    const { sortedPages } = await getClientBuildManifest();

    const pathname = location === "/" ? location : location.replace(/\/$/, "");

    return (
        sortedPages.includes(pathname) ||
        sortedPages.some((page) => {
            return (
                isDynamicRoute(page) && getRouteRegex(page).re.test(pathname)
            );
        })
    );
}

const Custom404 = () => {
    const router = useRouter();

    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            pageExists(router.asPath).then((exists) => {
                if (!exists) {
                    setIsNotFound(true);
                } else router.replace(router.asPath);
            });
        }
    }, [router.isReady, router.asPath, router]);

    if (!isNotFound) {
        return <div>loading</div>;
    }

    return <div>Custom404</div>;
};

export default Custom404;
