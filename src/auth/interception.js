import router from '@/router';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

router.beforeEach(async (to, from, next) => {
    const userInfor = JSON.parse(localStorage.getItem('Users'));
    // console.log('12', userInfor);
    // console.log('')
    if (to.matched.some((record) => record.meta.requiresAuth) && lodash.isEmpty(userInfor)) {
        next('/nshop/login');
    }
    else if (!lodash.isEmpty(userInfor) && userInfor.quyenhan == 1) {
        switch (to.name) {
            case 'login' || 'Register' || 'ResetPassword':
                next({ path: '/nshop' });
                break;
            // case 'home':
            //     next({ path: '/nshop/customerorder' });
            //     break;
            //  lam nay de phan biet admin
            case 'dashboard':
                next({ path: '/nshop' });
                break;

            case 'updateorder':
                next({ path: '/nshop' });
                break;
            case 'updateproduct':
                next({ path: '/nshop' });
                break;
            case 'addproduct':
                next({ path: '/nshop' });
                break;




            default:
                next();
                break;
        }
    }
    else next();
});