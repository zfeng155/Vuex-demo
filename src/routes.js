const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: () => import("./view/home/index")
    },
    {
        path: "/blog",
        name: "blog",
        redirect: { name: "blogList" },
        component: () => import("./view/blog/index"),
        children: [
            {
                path: "list",
                name: "blogList",
                component: () => import("./view/blog/blogList"),
            },
            {
                path: "view/:id",
                name: "blogView",
                props: true,
                component: () => import("./view/blog/blogDetails")
            }
        ]
    },
    {
        path: "/question",
        name: "question",
        redirect: { name: "questionList" },
        component: () => import("./view/question/index"),
        children: [
            {
                path: "list",
                name: "questionList",
                component: () => import("./view/question/questionList")
            },
            {
                path: "view/:id",
                name: "questionView",
                props: true,
                component: () => import("./view/question/questionDetails")
            }
        ]
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("./view/shop/index")
    },
    {
        path: "/personal",
        name: "personal",
        component: () => import("./view/personal/produce"),
        children: [
            {
                path: ":id",
                name: "personalDetails",
                props: true,
                component: () => import("./view/personal/personalDetails")
            }
        ]
    },
    {
        path: "/baidu",
        name: "baidu",
        component: () => import("./view/baidu/baidu")
    }
]

export default routes;