### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, Chill, choiv7, DEPRESHN, Goody<br />
Global Rank: [300](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  591.5<br />
<br />
Final Rank Value (591.5) = Starting Rank Value (534.1) + Head To Head Adjustments (57.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.1
- 400 + ( ( 0.071 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 534.1


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
|            9 |       14 | 2026-09-06 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -0.34 | andr1x, Chill, choiv7, DEPRESHN, Frip   |
|            8 |       19 | 2026-09-06 | fnatic           | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.895 (0.128)    | 0 (0.000) |    31.04 | andr1x, Chill, choiv7, DEPRESHN, Frip   |
|            7 |      196 | 2026-08-31 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |    -0.47 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            6 |      204 | 2026-08-31 | Noir Verse       | W   | 1.000      | 0.317        | 0.002 (0.001)    | 0.519 (0.164)    | 0 (0.000) |    25.68 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            5 |      233 | 2026-08-30 | PCIFIC           | W   | 1.000      | 0.317        | 0.003 (0.001)    | 0.259 (0.082)    | 0 (0.000) |    26.74 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            4 |      264 | 2026-08-30 | Noir Verse       | L   | 1.000      | -            | -                | -                | -         |    -4.51 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            3 |      276 | 2026-08-30 | Honvéd           | L   | 1.000      | -            | -                | -                | -         |    -5.29 | andr1x, Chill, choiv7, DEPRESHN, Goody  |
|            2 |      722 | 2026-08-17 | ex-Sashi Academy | L   | 1.000      | -            | -                | -                | -         |    -9.35 | andr1x, Chill, choiv7, DEPRESHN, Python |
|            1 |      778 | 2026-08-15 | LPH              | L   | 1.000      | -            | -                | -                | -         |    -6.18 | andr1x, Chill, choiv7, DEPRESHN, Python |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
