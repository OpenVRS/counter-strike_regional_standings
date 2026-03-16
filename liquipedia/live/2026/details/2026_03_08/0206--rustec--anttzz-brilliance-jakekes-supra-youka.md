### Roster Details<br />
Team Name: RUSTEC<br />
Roster: anttzz, Brilliance, jakekeS, supra, youka<br />
Global Rank: [206](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [138]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  692.3<br />
<br />
Final Rank Value (692.3) = Starting Rank Value (642.7) + Head To Head Adjustments (49.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.7
- 400 + ( ( 0.126 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 642.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.072
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1280 | 2026-02-02 | WhiteBird  | L   | 0.972      | -            | -                | -                | -         |    -0.64 | anttzz, Brilliance, jakekeS, supra, youka |
|            4 |     1287 | 2026-02-02 | K27        | L   | 0.971      | -            | -                | -                | -         |    -0.54 | anttzz, Brilliance, jakekeS, supra, youka |
|            3 |     1330 | 2026-01-31 | WW Team    | W   | 0.960      | 0.333        | 0.021 (0.007)    | 0.748 (0.240)    | 1 (0.960) |    28.65 | anttzz, Brilliance, jakekeS, supra, youka |
|            2 |     1347 | 2026-01-31 | ARCRED     | L   | 0.958      | -            | -                | -                | -         |    -1.69 | anttzz, Brilliance, jakekeS, supra, youka |
|            1 |     1362 | 2026-01-30 | Virtus.pro | W   | 0.956      | 0.333        | 0.085 (0.027)    | 0.034 (0.011)    | 1 (0.956) |    23.79 | anttzz, Brilliance, jakekeS, supra, youka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
