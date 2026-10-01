### Roster Details<br />
Team Name: ZEVS<br />
Roster: bexyz, dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [293](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  625.4<br />
<br />
Final Rank Value (625.4) = Starting Rank Value (632.5) + Head To Head Adjustments (-7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.210[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 632.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2314 | 2026-05-02 | Just Swing | L   | 0.577      | -            | -                | -                | -         |    -6.85 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            4 |     2363 | 2026-05-01 | Rooster    | L   | 0.571      | -            | -                | -                | -         |    -5.37 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            3 |     2404 | 2026-04-30 | BMZ        | W   | 0.565      | 0.471        | 0.004 (0.001)    | 0.192 (0.051)    | 1 (0.565) |    12.92 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            2 |     3355 | 2026-04-03 | NEXVOID    | L   | 0.385      | -            | -                | -                | -         |    -2.38 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            1 |     3431 | 2026-04-02 | yunglean   | L   | 0.380      | -            | -                | -                | -         |    -5.46 | bexyz, dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88.12)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.392 | $225.00        | $88.12          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
