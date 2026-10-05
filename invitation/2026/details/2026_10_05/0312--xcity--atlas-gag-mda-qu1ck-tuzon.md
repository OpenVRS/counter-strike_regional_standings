### Roster Details<br />
Team Name: Xcity<br />
Roster: ATLAS, gag, mda, qu1ck, tuzon<br />
Global Rank: [312](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [205]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  539.4<br />
<br />
Final Rank Value (539.4) = Starting Rank Value (520.6) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.6
- 400 + ( ( 0.060 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 520.6


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
|            6 |     1701 | 2026-08-29 | UPGRADE  | L   | 0.953      | -            | -                | -                | -         |    -0.81 | ATLAS, gag, mda, qu1ck, tuzon |
|            5 |     1784 | 2026-08-27 | Color    | L   | 0.940      | -            | -                | -                | -         |    -1.14 | ATLAS, gag, mda, qu1ck, tuzon |
|            4 |     1919 | 2026-08-24 | Nemesis  | L   | 0.920      | -            | -                | -                | -         |    -0.15 | ATLAS, gag, mda, qu1ck, tuzon |
|            3 |     1959 | 2026-08-23 | Walczaki | W   | 0.911      | 0.143        | 0.044 (0.006)    | 0.441 (0.057)    | 0 (0.000) |    27.18 | ATLAS, gag, mda, qu1ck, tuzon |
|            2 |     4304 | 2026-05-22 | WeClear  | L   | 0.293      | -            | -                | -                | -         |    -5.94 | ATLAS, gag, mda, qu1ck, tuzon |
|            1 |     4316 | 2026-05-22 | BAKS     | L   | 0.291      | -            | -                | -                | -         |    -0.27 | ATLAS, gag, mda, qu1ck, tuzon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
