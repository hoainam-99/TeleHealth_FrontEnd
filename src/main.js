import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// Dashboard
import Dasboard from "./view/Dashboard/TheDashBoard.vue";
import Dicom from "./view/Dashboard/TheViewDicom.vue";
// Patient
import Patient from "./view/patient/ThePatient.vue";
//Department
import Department from "./view/department/TheDepartment.vue";
//Doctor
import Doctor from "./view/doctor/TheDoctor.vue";
import DoctorWaiting from './view/doctor/TheDoctorWaiting.vue'
//Location
import City from "./view/locationCatagory/TheCity.vue";
import Commune from "./view/locationCatagory/TheCommune.vue";
import Country from "./view/locationCatagory/TheCountry.vue";
import District from "./view/locationCatagory/TheDistrict.vue";
import Ethnic from "./view/locationCatagory/TheEthnic.vue";
import TeleHealthEnum from "./js/enum.js";
import Tlc from "./view/TLC/TheTlc.vue";
import UserAuth from "./view/user/UserAuth.vue";
import Content from "./view/Content.vue";
import store from "./store/index.js";
import TheContent from "./components/layout/TheContent.vue";
import SignUp from "./view/user/SignUp.vue";
import ResultTlc from "./view/TLC/ResultTlc.vue"
import ListResults from "./view/TLC/ListReults.vue"
import LungVolumn3d from "./view/TLC/LungVolumn3d.vue"
import { DatePicker } from "ant-design-vue";
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css';

const abc = [
  { path: "/", redirect: "/content/maincontent/dashboard" },
  {
    path: "/content",
    component: Content,
    children: [
      {
        path: "maincontent",
        name: "TheContent",
        component: TheContent,
        children: [
          { path: "dashboard", name: "Dasboard", component: Dasboard },
          { path: "viewdicom", name: "Dicom", component: Dicom },
          {
            path: "patient",
            name: "Patient",
            component: Patient,
            meta: { requiresAuth: true },
          },
          {
            path: "department",
            name: "Department",
            component: Department,
            meta: { requiresAuth: true },
          },
          {
            path: "doctor",
            name: "Doctor",
            component: Doctor,
            meta: { requiresAuth: true },
          },
          {
            path: "doctorwait",
            name: "DoctorWaiting",
            component: DoctorWaiting,
            meta: { requiresAuth: true },
          },
          { path: "city", name: "City", component: City },
          { path: "commune", name: "Commune", component: Commune },
          { path: "country", name: "Country", component: Country },
          { path: "district", name: "District", component: District },
          { path: "ethnic", name: "Ethnic", component: Ethnic },
          { path: "tlc", name: "Tlc", component: Tlc },
        ],
      },
    ],
  },
  { path: "/auth", name: "UserAuth", component: UserAuth },
  { path: "/signup", name: "SignUp", component: SignUp },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: abc,
});
// router.beforeEach(function (to, from, next) {
//   // to.meta.requiresAuth && !store.getters.isAuthenticated
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next("/auth");
//   } else {
//     next();
//   }
// });

let app = createApp(App);
app.config.productionTip = false;
app.use(DatePicker);
app.use(Antd);
app.component('ResultTlc',ResultTlc)
app.component('ListResults',ListResults)
app.component('LungVolumn3d',LungVolumn3d)
app.config.globalProperties.TeleHealthEnum = TeleHealthEnum;
app.use(router);
app.use(store);
app.mount("#app");
