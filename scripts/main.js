import { getPoliticians } from "./PoliticianProvider.js"
import { getCorporations } from "./CorporationProvider.js"
import { getPACs } from "./PACProvider.js"
import { getCorporateDonations } from "./CorporateDonationsProvider.js"
import { getPacDonations } from "./PACDonationsProvider.js"
import { PACList } from "./PACList.js"
import PoliticianList from "./PoliticianList.js"
import CorporationList from "./CorporationList.js"

getPoliticians()
    .then(() => getPacDonations())
    .then(() => PoliticianList())

getCorporations()
    .then(() => CorporationList())

getPACs()
    .then(() => getCorporateDonations())
    .then(() => PACList())