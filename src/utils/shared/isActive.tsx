import {useRouter} from "next/router";

export const IsActiveRoute = (route: string) : Boolean => {
    const router = useRouter();
    const currentPathName = router.pathname;

    return currentPathName == route
} 