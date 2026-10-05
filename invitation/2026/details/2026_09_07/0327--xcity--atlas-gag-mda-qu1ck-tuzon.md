### Roster Details<br />
Team Name: Xcity<br />
Roster: ATLAS, gag, mda, qu1ck, tuzon<br />
Global Rank: [327](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [209]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  538.1<br />
<br />
Final Rank Value (538.1) = Starting Rank Value (523.0) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.0
- 400 + ( ( 0.065 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 523.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      321 | 2026-08-29 | UPGRADE  | L   | 1.000      | -            | -                | -                | -         |    -1.94 | ATLAS, gag, mda, qu1ck, tuzon |
|            5 |      404 | 2026-08-27 | Color    | L   | 1.000      | -            | -                | -                | -         |    -1.47 | ATLAS, gag, mda, qu1ck, tuzon |
|            4 |      539 | 2026-08-24 | Nemesis  | L   | 1.000      | -            | -                | -                | -         |    -0.68 | ATLAS, gag, mda, qu1ck, tuzon |
|            3 |      579 | 2026-08-23 | Walczaki | W   | 1.000      | 0.143        | 0.064 (0.009)    | 0.780 (0.111)    | 0 (0.000) |    29.84 | ATLAS, gag, mda, qu1ck, tuzon |
|            2 |     2924 | 2026-05-22 | WeClear  | L   | 0.477      | -            | -                | -                | -         |    -9.46 | ATLAS, gag, mda, qu1ck, tuzon |
|            1 |     2936 | 2026-05-22 | BAKS     | L   | 0.476      | -            | -                | -                | -         |    -1.23 | ATLAS, gag, mda, qu1ck, tuzon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
