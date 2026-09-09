### Roster Details<br />
Team Name: NOVAQ<br />
Roster: AdreN, neaLaN, nyx, Pump, tasman<br />
Global Rank: [80](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [61]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1019.6<br />
<br />
Final Rank Value (1019.6) = Starting Rank Value (988.4) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.485[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.4
- 400 + ( ( 0.309 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 988.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      127 | 2026-09-03 | Rune Eaters | L   | 1.000      | -            | -                | -                | -         |   -14.64 | AdreN, neaLaN, nyx, Pump, tasman    |
|           13 |     1399 | 2026-07-26 | Rune Eaters | W   | 0.906      | 0.396        | 0.024 (0.009)    | 0.767 (0.275)    | 1 (0.906) |    15.35 | AdreN, neaLaN, nyx, Pump, tasman    |
|           12 |     1432 | 2026-07-25 | DEPO        | W   | 0.899      | 0.396        | 0.021 (0.007)    | 0.440 (0.157)    | 1 (0.899) |    19.07 | AdreN, neaLaN, nyx, Pump, tasman    |
|           11 |     1452 | 2026-07-25 | Omega       | W   | 0.897      | 0.396        | 0.027 (0.010)    | 0.395 (0.141)    | 1 (0.897) |    21.71 | AdreN, neaLaN, nyx, Pump, tasman    |
|           10 |     1457 | 2026-07-24 | Orda        | W   | 0.896      | 0.396        | 0.002 (0.001)    | 0.035 (0.012)    | 1 (0.896) |     4.21 | AdreN, neaLaN, nyx, Pump, tasman    |
|            9 |     2050 | 2026-06-25 | Rune Eaters | L   | 0.699      | -            | -                | -                | -         |    -8.14 | AdreN, kAlash, neaLaN, Pump, tasman |
|            8 |     2057 | 2026-06-25 | The Huns    | L   | 0.698      | -            | -                | -                | -         |   -14.76 | AdreN, kAlash, neaLaN, Pump, tasman |
|            7 |     2064 | 2026-06-25 | Rune Eaters | W   | 0.697      | 0.324        | 0.024 (0.005)    | 0.767 (0.173)    | 1 (0.697) |    13.75 | AdreN, kAlash, neaLaN, Pump, tasman |
|            6 |     4702 | 2026-04-02 | JUMBO       | L   | 0.137      | -            | -                | -                | -         |    -4.03 | def1zer, ICY, neaLaN, Pump, tasman  |
|            5 |     4795 | 2026-03-31 | K27         | L   | 0.130      | -            | -                | -                | -         |    -0.29 | def1zer, ICY, neaLaN, Pump, tasman  |
|            4 |     5751 | 2026-03-15 | ex-MANA     | L   | 0.020      | -            | -                | -                | -         |    -0.50 | def1zer, ICY, neaLaN, Pump, tasman  |
|            3 |     5773 | 2026-03-15 | Omega       | L   | 0.018      | -            | -                | -                | -         |    -0.10 | def1zer, ICY, neaLaN, Pump, tasman  |
|            2 |     5790 | 2026-03-14 | illwill     | L   | 0.014      | -            | -                | -                | -         |    -0.39 | def1zer, ICY, neaLaN, Pump, tasman  |
|            1 |     5885 | 2026-03-12 | HAVU        | W   | 0.000      | 0.384        | 0.004 (0.000)    | 0.451 (0.000)    | 0 (0.000) |     0.00 | def1zer, ICY, neaLaN, Pump, tasman  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,604.55)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.906 | $15,000.00     | $13,585.08      |
| 2026-03-15 |      0.020 | $500.00        | $10.17          |
| 2026-03-15 |      0.018 | $509.00        | $9.31           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
