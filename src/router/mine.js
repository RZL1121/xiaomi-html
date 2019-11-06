export default {

    path:"/mine",
    component:()=>import("@/views/Mine"),
    children:[
        {path:"",redirect:"list"},
        {path:"list",component:()=>import("@/views/Mine/List"),name:"list"},// 匿名路由
        {path:"cart",component:()=>import("@/views/Mine/Cart"),name:"cart"}
    ]
}
