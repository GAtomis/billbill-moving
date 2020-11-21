import router from './router'
import store from './store'
let switchd = true;

router.beforeEach(async(to, from, next) => {



    console.log('导航守卫')
    console.log("Artemis-UI，for Gavin To XiaoNan");


    if (switchd) {
        console.log(router);


        try {
            switchd = false
            const accessRoutes = await store.dispatch('permission/generateRoutes', [])
                // console.log(accessRoutes);
            console.log("异步路由加载");


            router.addRoutes(accessRoutes)


            // hack method to ensure that addRoutes is complete
            // set the replace: true, so the navigation will not leave a history record
            next({...to, replace: true })
        } catch (error) {
            switchd = false
            next()
        }
    }
    const accessRoutes = await store.dispatch('permission/generateRoutes', [])
    console.log(router)
    next()

    // ...
})