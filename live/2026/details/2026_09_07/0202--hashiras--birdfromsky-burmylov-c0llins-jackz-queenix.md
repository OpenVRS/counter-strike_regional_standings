### Roster Details<br />
Team Name: Hashiras<br />
Roster: birdfromsky, Burmylov, c0llins, JACKZ, Queenix<br />
Global Rank: [202](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  707.7<br />
<br />
Final Rank Value (707.7) = Starting Rank Value (666.8) + Head To Head Adjustments (40.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.8
- 400 + ( ( 0.140 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 666.8


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
|           36 |     2676 | 2026-05-28 | Misa             | L   | 0.517      | -            | -                | -                | -         |    -7.85 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           35 |     2719 | 2026-05-27 | Julie&Cie        | W   | 0.510      | -            | -                | -                | 0 (0.000) |     6.52 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           34 |     2722 | 2026-05-27 | EAC              | L   | 0.510      | -            | -                | -                | -         |    -1.63 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           33 |     2775 | 2026-05-25 | NEW VISION       | L   | 0.498      | -            | -                | -                | -         |    -7.09 | Burmylov, c0llins, JACKZ, Queenix, rilax       |
|           32 |     2823 | 2026-05-24 | Bushido Wildcats | L   | 0.491      | -            | -                | -                | -         |    -4.96 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           31 |     2837 | 2026-05-24 | ex-MANA          | W   | 0.489      | 0.396        | 0.004 (0.001)    | 0.553 (0.107)    | 0 (0.000) |     8.08 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           30 |     2855 | 2026-05-23 | EAC              | L   | 0.485      | -            | -                | -                | -         |    -1.43 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           29 |     2882 | 2026-05-23 | Vexar            | W   | 0.483      | 0.303        | -                | 0.477 (0.070)    | 0 (0.000) |     7.75 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           28 |     3004 | 2026-05-20 | Bebop            | W   | 0.465      | 0.344        | -                | 0.384 (0.061)    | 0 (0.000) |     8.58 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           27 |     3042 | 2026-05-19 | Drip Too Hard    | W   | 0.456      | 0.344        | 0.001 (0.000)    | 0.356 (0.056)    | 0 (0.000) |     7.73 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           26 |     3140 | 2026-05-15 | Drip Too Hard    | L   | 0.430      | -            | -                | -                | -         |    -6.31 | Aaron, birdfromsky, JACKZ, Queenix, rilax      |
|           25 |     3152 | 2026-05-14 | Just Players     | L   | 0.426      | -            | -                | -                | -         |    -2.83 | Aaron, birdfromsky, Burmylov, JACKZ, Queenix   |
|           24 |     3642 | 2026-04-29 | Lavked           | L   | 0.325      | -            | -                | -                | -         |    -2.51 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           23 |     3680 | 2026-04-28 | UPGRADE          | W   | 0.319      | 0.384        | 0.012 (0.002)    | 0.760 (0.093)    | 0 (0.000) |     8.83 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           22 |     3721 | 2026-04-27 | Nemesis          | L   | 0.312      | -            | -                | -                | -         |    -0.76 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           21 |     3844 | 2026-04-25 | Phantom          | W   | 0.299      | -            | -                | -                | 0 (0.000) |     5.77 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           20 |     3971 | 2026-04-23 | Walczaki         | W   | 0.283      | 0.384        | 0.064 (0.007)    | 0.780 (0.085)    | 0 (0.000) |     7.72 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           19 |     3989 | 2026-04-22 | ex-RUSTEC        | W   | 0.277      | 0.384        | 0.018 (0.002)    | 0.909 (0.097)    | 0 (0.000) |     7.46 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           18 |     4160 | 2026-04-12 | Bebop            | L   | 0.212      | -            | -                | -                | -         |    -2.50 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           17 |     4199 | 2026-04-11 | UNiTY            | W   | 0.203      | 0.384        | 0.006 (0.000)    | 0.537 (0.042)    | 0 (0.000) |     5.23 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           16 |     4214 | 2026-04-10 | ex-MANA          | L   | 0.198      | -            | -                | -                | -         |    -2.49 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           15 |     4239 | 2026-04-09 | UNiTY            | W   | 0.192      | 0.384        | 0.006 (0.000)    | 0.537 (0.040)    | -         |     4.99 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           14 |     4255 | 2026-04-09 | Lavked           | L   | 0.189      | -            | -                | -                | -         |    -1.37 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           13 |     4462 | 2026-04-04 | HEROIC Academy   | W   | 0.157      | -            | -                | -                | -         |     2.59 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           12 |     4860 | 2026-03-31 | Imperial Academy | W   | 0.130      | -            | -                | -                | -         |     1.12 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           11 |     5072 | 2026-03-28 | Permitta         | L   | 0.111      | -            | -                | -                | -         |    -0.99 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           10 |     5137 | 2026-03-27 | Persona Grata    | L   | 0.103      | -            | -                | -                | -         |    -2.34 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            9 |     5196 | 2026-03-25 | Lavked           | L   | 0.092      | -            | -                | -                | -         |    -0.67 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            8 |     5265 | 2026-03-24 | PsychoFace       | L   | 0.084      | -            | -                | -                | -         |    -0.49 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            7 |     5321 | 2026-03-23 | ex-RUSTEC        | L   | 0.079      | -            | -                | -                | -         |    -0.37 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            6 |     5402 | 2026-03-22 | Rune Eaters      | W   | 0.070      | 0.435        | 0.024 (0.001)    | -                | -         |     2.10 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            5 |     5466 | 2026-03-21 | ex-Zero Tenacity | W   | 0.063      | 0.384        | 0.031 (0.001)    | 1.000 (0.024)    | -         |     1.59 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            4 |     5635 | 2026-03-17 | Butterfly        | W   | 0.038      | 0.384        | 0.034 (0.001)    | -                | -         |     1.11 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            3 |     5702 | 2026-03-16 | Atreides         | W   | 0.030      | -            | -                | -                | -         |     0.62 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            2 |     5764 | 2026-03-14 | FAVBET           | L   | 0.019      | -            | -                | -                | -         |    -0.31 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|            1 |     5904 | 2026-03-11 | OlyBet           | W   | 0.000      | -            | -                | -                | -         |     0.01 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($264.06)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      0.352 | $750.00        | $264.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
