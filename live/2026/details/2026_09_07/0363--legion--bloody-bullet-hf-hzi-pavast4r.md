### Roster Details<br />
Team Name: Legion<br />
Roster: Bloody, BulleT, hf, HZI, pavast4r<br />
Global Rank: [363](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (501.1) + Head To Head Adjustments (-16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.1
- 400 + ( ( 0.053 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 501.1


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
|           11 |     3592 | 2026-05-01 | Nas               | L   | 0.332      | -            | -                | -                | -         |    -5.05 | Bloody, BulleT, hf, HZI, pavast4r    |
|           10 |     3646 | 2026-04-30 | Unitronics        | L   | 0.324      | -            | -                | -                | -         |    -6.19 | Bloody, bravo, BulleT, HZI, pavast4r |
|            9 |     3763 | 2026-04-27 | Rare Atom         | L   | 0.305      | -            | -                | -                | -         |    -2.22 | Bloody, BulleT, hf, HZI, pavast4r    |
|            8 |     3823 | 2026-04-26 | Chinggis Warriors | L   | 0.299      | -            | -                | -                | -         |    -1.74 | Bloody, BulleT, hf, HZI, pavast4r    |
|            7 |     4576 | 2026-04-03 | 5star             | L   | 0.145      | -            | -                | -                | -         |    -0.55 | Bloody, BulleT, hf, HZI, pavast4r    |
|            6 |     4681 | 2026-04-02 | Arise             | L   | 0.138      | -            | -                | -                | -         |    -2.79 | Bloody, BulleT, hf, HZI, pavast4r    |
|            5 |     4777 | 2026-04-01 | DEPO              | L   | 0.131      | -            | -                | -                | -         |    -0.08 | Bloody, BulleT, hf, HZI, pavast4r    |
|            4 |     4829 | 2026-03-31 | Haunted House     | L   | 0.126      | -            | -                | -                | -         |    -1.05 | Bloody, BulleT, hf, HZI, pavast4r    |
|            3 |     4855 | 2026-03-31 | DEPO              | W   | 0.125      | 0.624        | 0.021 (0.002)    | 0.440 (0.034)    | 0 (0.000) |     3.87 | Bloody, BulleT, hf, HZI, pavast4r    |
|            2 |     5479 | 2026-03-21 | Rare Atom         | L   | 0.059      | -            | -                | -                | -         |    -0.54 | Bloody, BulleT, hf, HZI, pavast4r    |
|            1 |     5539 | 2026-03-20 | BORING PLAYERS    | L   | 0.052      | -            | -                | -                | -         |    -0.51 | Bloody, BulleT, hf, HZI, pavast4r    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
