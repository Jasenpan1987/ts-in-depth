import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const map = new CustomMap(document.getElementById("mapContainer"));
const user = new User();
const company = new Company();

map.addMarker(company);
map.addMarker(user);
