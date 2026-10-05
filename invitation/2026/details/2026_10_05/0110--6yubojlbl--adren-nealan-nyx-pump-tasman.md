### Roster Details<br />
Team Name: 6yuBoJlbl<br />
Roster: AdreN, neaLaN, nyx, Pump, tasman<br />
Global Rank: [110](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [80]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1014.6<br />
<br />
Final Rank Value (1014.6) = Starting Rank Value (968.1) + Head To Head Adjustments (46.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.340[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 968.1
- 400 + ( ( 0.284 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 968.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        1 | 2026-10-04 | INOX Division | L   | 1.000      | -            | -                | -                | -         |   -12.35 | ICY, neaLaN, Pump, stratefly, tasman |
|           11 |       29 | 2026-10-03 | Lavked        | W   | 1.000      | 0.386        | 0.011 (0.004)    | 0.664 (0.256)    | 0 (0.000) |    10.02 | ICY, neaLaN, Pump, stratefly, tasman |
|           10 |       58 | 2026-10-02 | Nexus         | W   | 1.000      | 0.386        | 0.011 (0.004)    | 0.359 (0.138)    | 0 (0.000) |    16.04 | ICY, neaLaN, Pump, stratefly, tasman |
|            9 |     1239 | 2026-09-08 | WW            | L   | 1.000      | -            | -                | -                | -         |   -10.12 | AdreN, neaLaN, nyx, Pump, tasman     |
|            8 |     1473 | 2026-09-03 | Rune Eaters   | L   | 0.986      | -            | -                | -                | -         |   -10.06 | AdreN, neaLaN, nyx, Pump, tasman     |
|            7 |     2751 | 2026-07-26 | Rune Eaters   | W   | 0.727      | 0.396        | 0.046 (0.013)    | 0.601 (0.173)    | 1 (0.727) |    16.01 | AdreN, neaLaN, nyx, Pump, tasman     |
|            6 |     2784 | 2026-07-25 | DEPO          | W   | 0.720      | 0.396        | 0.019 (0.005)    | 0.395 (0.113)    | 1 (0.720) |    13.86 | AdreN, neaLaN, nyx, Pump, tasman     |
|            5 |     2804 | 2026-07-25 | Omega         | W   | 0.718      | 0.396        | 0.037 (0.010)    | 0.325 (0.093)    | 1 (0.718) |    17.42 | AdreN, neaLaN, nyx, Pump, tasman     |
|            4 |     2809 | 2026-07-24 | Orda          | W   | 0.717      | 0.396        | 0.002 (0.000)    | 0.025 (0.007)    | 1 (0.717) |     3.34 | AdreN, neaLaN, nyx, Pump, tasman     |
|            3 |     3402 | 2026-06-25 | Rune Eaters   | L   | 0.520      | -            | -                | -                | -         |    -3.65 | AdreN, kAlash, neaLaN, Pump, tasman  |
|            2 |     3409 | 2026-06-25 | The Huns      | L   | 0.519      | -            | -                | -                | -         |    -6.78 | AdreN, kAlash, neaLaN, Pump, tasman  |
|            1 |     3416 | 2026-06-25 | Rune Eaters   | W   | 0.518      | 0.324        | 0.046 (0.008)    | 0.601 (0.101)    | 1 (0.518) |    12.84 | AdreN, kAlash, neaLaN, Pump, tasman  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,272.64)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-04 |      1.000 | $6,373.00      | $6,373.00       |
| 2026-07-26 |      0.727 | $15,000.00     | $10,899.64      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
