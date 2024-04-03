import { useRouter } from "next/router";
import React from "react";

const UserIdPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>User ID: {router.query.id}</h1>
        </div>
    );
};

export default UserIdPage;
