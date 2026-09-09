### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, Chill, choiv7, DEPRESHN, Goody<br />
Global Rank: [302](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  593.1<br />
<br />
Final Rank Value (593.1) = Starting Rank Value (535.5) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.5
- 400 + ( ( 0.071 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 535.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       34 | 2026-09-06 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -0.35 | andr1x, Chill, choiv7, DEPRESHN, Frip   |
|            8 |       43 | 2026-09-06 | fnatic           | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.893 (0.128)    | 0 (0.000) |    31.04 | andr1x, Chill, choiv7, DEPRESHN, Frip   |
|            7 |      224 | 2026-08-31 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |    -0.47 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            6 |      232 | 2026-08-31 | Noir Verse       | W   | 1.000      | 0.317        | 0.002 (0.001)    | 0.519 (0.165)    | 0 (0.000) |    25.78 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            5 |      261 | 2026-08-30 | PCIFIC           | W   | 1.000      | 0.317        | 0.003 (0.001)    | 0.338 (0.107)    | 0 (0.000) |    26.83 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            4 |      292 | 2026-08-30 | Noir Verse       | L   | 1.000      | -            | -                | -                | -         |    -4.41 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            3 |      304 | 2026-08-30 | Honvéd           | L   | 1.000      | -            | -                | -                | -         |    -5.30 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            2 |      750 | 2026-08-17 | ex-Sashi Academy | L   | 1.000      | -            | -                | -                | -         |    -9.39 | andr1x, Chill, choiv7, DEPRESHN, Python |
|            1 |      806 | 2026-08-15 | LPH              | L   | 1.000      | -            | -                | -                | -         |    -6.13 | andr1x, Chill, choiv7, DEPRESHN, Python |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
