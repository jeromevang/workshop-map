import { addPlace } from "../components/sidebar/sidebar.js";

document.getElementById("addplace").addEventListener("click", function () { addPlace(document.getElementById("pname").value) });
