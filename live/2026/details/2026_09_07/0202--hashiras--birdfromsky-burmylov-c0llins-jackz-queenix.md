### Roster Details<br />
Team Name: Hashiras<br />
Roster: birdfromsky, Burmylov, c0llins, JACKZ, Queenix<br />
Global Rank: [202](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  705.9<br />
<br />
Final Rank Value (705.9) = Starting Rank Value (666.0) + Head To Head Adjustments (39.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.0
- 400 + ( ( 0.140 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 666.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     2704 | 2026-05-28 | Misa             | L   | 0.511      | -            | -                | -                | -         |    -7.72 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           34 |     2747 | 2026-05-27 | Julie&Cie        | W   | 0.505      | -            | -                | -                | 0 (0.000) |     6.47 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           33 |     2750 | 2026-05-27 | EAC              | L   | 0.504      | -            | -                | -                | -         |    -1.57 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           32 |     2803 | 2026-05-25 | NEW VISION       | L   | 0.493      | -            | -                | -                | -         |    -7.00 | Burmylov, c0llins, JACKZ, Queenix, rilax       |
|           31 |     2851 | 2026-05-24 | Bushido Wildcats | L   | 0.485      | -            | -                | -                | -         |    -4.87 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           30 |     2865 | 2026-05-24 | ex-MANA          | W   | 0.484      | 0.396        | 0.004 (0.001)    | 0.549 (0.105)    | 0 (0.000) |     8.14 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           29 |     2883 | 2026-05-23 | EAC              | L   | 0.480      | -            | -                | -                | -         |    -1.38 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           28 |     2910 | 2026-05-23 | Vexar            | W   | 0.478      | 0.303        | -                | 0.516 (0.075)    | 0 (0.000) |     7.79 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           27 |     3032 | 2026-05-20 | Bebop            | W   | 0.459      | 0.344        | -                | 0.381 (0.060)    | 0 (0.000) |     8.46 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           26 |     3070 | 2026-05-19 | Drip Too Hard    | W   | 0.451      | 0.344        | 0.001 (0.000)    | 0.355 (0.055)    | 0 (0.000) |     7.70 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           25 |     3168 | 2026-05-15 | Drip Too Hard    | L   | 0.425      | -            | -                | -                | -         |    -6.17 | Aaron, birdfromsky, JACKZ, Queenix, rilax      |
|           24 |     3180 | 2026-05-14 | Just Players     | L   | 0.420      | -            | -                | -                | -         |    -2.78 | Aaron, birdfromsky, Burmylov, JACKZ, Queenix   |
|           23 |     3670 | 2026-04-29 | Lavked           | L   | 0.320      | -            | -                | -                | -         |    -2.44 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           22 |     3708 | 2026-04-28 | UPGRADE          | W   | 0.313      | 0.384        | 0.012 (0.001)    | 0.758 (0.091)    | 0 (0.000) |     8.68 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           21 |     3749 | 2026-04-27 | Nemesis          | L   | 0.306      | -            | -                | -                | -         |    -0.74 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           20 |     3872 | 2026-04-25 | Phantom          | W   | 0.293      | -            | -                | -                | 0 (0.000) |     5.65 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           19 |     3999 | 2026-04-23 | Walczaki         | W   | 0.277      | 0.384        | 0.063 (0.007)    | 0.774 (0.083)    | 0 (0.000) |     7.57 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           18 |     4017 | 2026-04-22 | ex-RUSTEC        | W   | 0.272      | 0.384        | 0.018 (0.002)    | 0.908 (0.095)    | 0 (0.000) |     7.32 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           17 |     4188 | 2026-04-12 | Bebop            | L   | 0.206      | -            | -                | -                | -         |    -2.45 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           16 |     4227 | 2026-04-11 | UNiTY            | W   | 0.197      | 0.384        | 0.006 (0.000)    | 0.537 (0.041)    | 0 (0.000) |     5.09 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           15 |     4242 | 2026-04-10 | ex-MANA          | L   | 0.193      | -            | -                | -                | -         |    -2.35 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           14 |     4267 | 2026-04-09 | UNiTY            | W   | 0.187      | 0.384        | 0.006 (0.000)    | 0.537 (0.039)    | -         |     4.85 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           13 |     4283 | 2026-04-09 | Lavked           | L   | 0.184      | -            | -                | -                | -         |    -1.31 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           12 |     4490 | 2026-04-04 | HEROIC Academy   | W   | 0.152      | -            | -                | -                | -         |     2.49 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           11 |     4888 | 2026-03-31 | Imperial Academy | W   | 0.124      | -            | -                | -                | -         |     1.08 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           10 |     5100 | 2026-03-28 | los kogutos      | L   | 0.105      | -            | -                | -                | -         |    -1.54 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            9 |     5165 | 2026-03-27 | Persona Grata    | L   | 0.098      | -            | -                | -                | -         |    -2.24 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            8 |     5224 | 2026-03-25 | Lavked           | L   | 0.087      | -            | -                | -                | -         |    -0.62 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            7 |     5293 | 2026-03-24 | PsychoFace       | L   | 0.079      | -            | -                | -                | -         |    -0.46 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            6 |     5349 | 2026-03-23 | ex-RUSTEC        | L   | 0.073      | -            | -                | -                | -         |    -0.34 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            5 |     5430 | 2026-03-22 | Rune Eaters      | W   | 0.065      | 0.435        | 0.024 (0.001)    | -                | -         |     1.94 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            4 |     5494 | 2026-03-21 | ex-Zero Tenacity | W   | 0.058      | 0.384        | 0.031 (0.001)    | 1.000 (0.022)    | -         |     1.46 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            3 |     5663 | 2026-03-17 | Butterfly        | W   | 0.033      | 0.384        | 0.034 (0.000)    | -                | -         |     0.95 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            2 |     5730 | 2026-03-16 | Atreides         | W   | 0.024      | -            | -                | -                | -         |     0.51 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            1 |     5792 | 2026-03-14 | FAVBET           | L   | 0.013      | -            | -                | -                | -         |    -0.22 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($259.96)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      0.347 | $750.00        | $259.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
