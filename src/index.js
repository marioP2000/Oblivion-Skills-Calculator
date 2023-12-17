// Styles & Assets
import "./styles/main.scss";

// Major Abilities
import strength from "./scripts/majorAbilities/strength";
import intelligence from "./scripts/majorAbilities/intelligence";
import agility from "./scripts/majorAbilities/agility";
import endurance from "./scripts/majorAbilities/endurance";
import personality from "./scripts/majorAbilities/personality";
import speed from "./scripts/majorAbilities/speed";
import willpower from "./scripts/majorAbilities/willpower";

strength();
intelligence();
agility();
endurance();
personality();
speed();
willpower();

// Minor Abilities
import minorSTR from "./scripts/minorAbilities/minorSTR";
import minorINT from "./scripts/minorAbilities/minorINT";
import minorWIL from "./scripts/minorAbilities/minorWIL";
import minorAGI from "./scripts/minorAbilities/minorAGI";
import minorSPE from "./scripts/minorAbilities/minorSPE";
import minorEND from "./scripts/minorAbilities/minorEND";
import minorPER from "./scripts/minorAbilities/minorPER";

minorSTR();
minorINT();
minorWIL();
minorAGI();
minorSPE();
minorEND();
minorPER();

// Reset Abilities
import resetAbilities from "./scripts/resetAbilities";

resetAbilities();