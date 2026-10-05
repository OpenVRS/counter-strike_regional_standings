### Roster Details<br />
Team Name: Leo<br />
Roster: amster, kL1o, leen, Malkiss, OneUn1que<br />
Global Rank: [340](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [226]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  499.2<br />
<br />
Final Rank Value (499.2) = Starting Rank Value (489.3) + Head To Head Adjustments (10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.3
- 400 + ( ( 0.045 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 489.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3920 | 2026-05-31 | ASTRAL            | L   | 0.353      | -            | -                | -                | -         |    -0.49 | amster, kL1o, leen, leri511, marat2k      |
|            7 |     4357 | 2026-05-21 | Phantom           | L   | 0.285      | -            | -                | -                | -         |    -0.29 | amster, kL1o, leen, leri511, OneUn1que    |
|            6 |     4433 | 2026-05-18 | PsychoFace        | W   | 0.267      | 0.384        | 0.002 (0.000)    | 0.183 (0.019)    | 0 (0.000) |     7.42 | amster, kL1o, leen, leri511, OneUn1que    |
|            5 |     5058 | 2026-04-28 | Lavked            | L   | 0.134      | -            | -                | -                | -         |    -0.41 | amster, kL1o, leen, Malkiss, OneUn1que    |
|            4 |     5098 | 2026-04-27 | fnatic            | L   | 0.128      | -            | -                | -                | -         |    -0.02 | amster, kL1o, leen, Malkiss, OneUn1que    |
|            3 |     5223 | 2026-04-25 | BIG Academy       | W   | 0.114      | 0.384        | 0.000 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     2.04 | amster, kL1o, leen, Malkiss, OneUn1que    |
|            2 |     5346 | 2026-04-23 | Aurora Young Blud | W   | 0.099      | 0.384        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     1.74 | amster, kL1o, leen, Malkiss, OneUn1que    |
|            1 |     5547 | 2026-04-12 | Black Phoenix     | L   | 0.026      | -            | -                | -                | -         |    -0.04 | amster, leen, Malkiss, marat2k, OneUn1que |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
