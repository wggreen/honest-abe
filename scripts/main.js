import { getPoliticians } from "./PoliticianProvider.js"
import { getCorporations } from "./CorporationProvider.js"
import { getPACs } from "./PACProvider.js"
import { getCorporateDonations } from "./CorporateDonationsProvider.js"
import { getPacDonations } from "./PACDonationsProvider.js"
import { PACList } from "./PACList.js"
import PoliticianList from "./PoliticianList.js"
import CorporationList from "./CorporationList.js"
import { getBills } from "./BillProvider.js"
import { getBillSponsors } from "./BillSponsorsProvider.js"
import { getInterests } from "./InterestsProvider.js"
import { getCorporateInterests } from "./CorporateInterestsProvider.js"

getPoliticians()
    .then(() => getBills())
    .then(() => getBillSponsors())
    .then(() => getPacDonations())
    .then(() => getInterests())
    .then(() => getCorporateInterests())
    .then(() => PoliticianList())

getCorporations()
    .then(() => CorporationList())

getPACs()
    .then(() => getCorporateDonations())
    .then(() => PACList())