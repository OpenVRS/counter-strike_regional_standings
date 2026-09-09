### Roster Details<br />
Team Name: OLDBOYS PL<br />
Roster: Goofy, MICHU, rallen, ToM223, tudsoN<br />
Global Rank: [225](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  673.4<br />
<br />
Final Rank Value (673.4) = Starting Rank Value (634.1) + Head To Head Adjustments (39.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.1
- 400 + ( ( 0.123 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 634.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2199 | 2026-06-14 | Arch          | L   | 0.627      | -            | -                | -                | -         |   -11.61 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           13 |     2280 | 2026-06-12 | DONSTU        | W   | 0.614      | 0.143        | 0.004 (0.000)    | 0.449 (0.039)    | 0 (0.000) |    12.65 | Goofy, gwizdakk, MICHU, rallen, tudsoN |
|           12 |     2333 | 2026-06-10 | Falcons Force | W   | 0.600      | 0.143        | 0.000 (0.000)    | 0.221 (0.019)    | 0 (0.000) |    10.52 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           11 |     2366 | 2026-06-08 | ROUNDS        | W   | 0.587      | 0.143        | 0.000 (0.000)    | 0.221 (0.019)    | 0 (0.000) |     9.58 | darko, gwizdakk, MICHU, ToM223, tudsoN |
|           10 |     2418 | 2026-06-06 | bankaPEPSI    | W   | 0.573      | 0.143        | 0.000 (0.000)    | 0.039 (0.003)    | 0 (0.000) |     8.04 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            9 |     2535 | 2026-06-01 | Arch          | L   | 0.540      | -            | -                | -                | -         |    -9.58 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            8 |     3753 | 2026-04-27 | BIG Academy   | L   | 0.306      | -            | -                | -                | -         |    -5.60 | darko, Goofy, rallen, ToM223, tudsoN   |
|            7 |     3805 | 2026-04-26 | Rune Eaters   | W   | 0.300      | 0.384        | 0.024 (0.003)    | 0.767 (0.088)    | 0 (0.000) |     8.91 | darko, Goofy, rallen, ToM223, tudsoN   |
|            6 |     3896 | 2026-04-25 | DONSTU        | W   | 0.292      | 0.384        | 0.004 (0.000)    | 0.449 (0.050)    | 0 (0.000) |     6.74 | darko, Goofy, rallen, ToM223, tudsoN   |
|            5 |     3951 | 2026-04-24 | rottweilers   | W   | 0.286      | 0.384        | 0.000 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     2.87 | darko, Goofy, rallen, ToM223, tudsoN   |
|            4 |     3977 | 2026-04-23 | Lavked        | L   | 0.280      | -            | -                | -                | -         |    -1.73 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            3 |     4007 | 2026-04-22 | MASONIC       | W   | 0.273      | 0.384        | 0.006 (0.001)    | 0.207 (0.022)    | 0 (0.000) |     6.93 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            2 |     5054 | 2026-03-28 | PsychoFace    | L   | 0.107      | -            | -                | -                | -         |    -0.53 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            1 |     5138 | 2026-03-27 | Enjoy         | W   | 0.100      | 0.400        | 0.004 (0.000)    | 0.535 (0.021)    | 0 (0.000) |     2.06 | Goofy, MICHU, rallen, ToM223, tudsoN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($284.63)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.114 | $2,500.00      | $284.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
