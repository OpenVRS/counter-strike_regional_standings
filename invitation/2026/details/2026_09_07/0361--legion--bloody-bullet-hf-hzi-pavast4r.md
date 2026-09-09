### Roster Details<br />
Team Name: Legion<br />
Roster: Bloody, BulleT, hf, HZI, pavast4r<br />
Global Rank: [361](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (501.5) + Head To Head Adjustments (-17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.5
- 400 + ( ( 0.053 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 501.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3564 | 2026-05-01 | Nas               | L   | 0.337      | -            | -                | -                | -         |    -5.13 | Bloody, BulleT, hf, HZI, pavast4r    |
|           10 |     3618 | 2026-04-30 | Unitronics        | L   | 0.329      | -            | -                | -                | -         |    -6.29 | Bloody, bravo, BulleT, HZI, pavast4r |
|            9 |     3735 | 2026-04-27 | Rare Atom         | L   | 0.311      | -            | -                | -                | -         |    -2.27 | Bloody, BulleT, hf, HZI, pavast4r    |
|            8 |     3795 | 2026-04-26 | Chinggis Warriors | L   | 0.304      | -            | -                | -                | -         |    -1.75 | Bloody, BulleT, hf, HZI, pavast4r    |
|            7 |     4548 | 2026-04-03 | 5star             | L   | 0.150      | -            | -                | -                | -         |    -0.57 | Bloody, BulleT, hf, HZI, pavast4r    |
|            6 |     4653 | 2026-04-02 | Arise             | L   | 0.144      | -            | -                | -                | -         |    -2.90 | Bloody, BulleT, hf, HZI, pavast4r    |
|            5 |     4749 | 2026-04-01 | DEPO              | L   | 0.137      | -            | -                | -                | -         |    -0.08 | Bloody, BulleT, hf, HZI, pavast4r    |
|            4 |     4801 | 2026-03-31 | Haunted House     | L   | 0.132      | -            | -                | -                | -         |    -1.10 | Bloody, BulleT, hf, HZI, pavast4r    |
|            3 |     4827 | 2026-03-31 | DEPO              | W   | 0.131      | 0.624        | 0.021 (0.002)    | 0.441 (0.036)    | 0 (0.000) |     4.04 | Bloody, BulleT, hf, HZI, pavast4r    |
|            2 |     5451 | 2026-03-21 | Rare Atom         | L   | 0.064      | -            | -                | -                | -         |    -0.59 | Bloody, BulleT, hf, HZI, pavast4r    |
|            1 |     5511 | 2026-03-20 | BORING PLAYERS    | L   | 0.058      | -            | -                | -                | -         |    -0.56 | Bloody, BulleT, hf, HZI, pavast4r    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
