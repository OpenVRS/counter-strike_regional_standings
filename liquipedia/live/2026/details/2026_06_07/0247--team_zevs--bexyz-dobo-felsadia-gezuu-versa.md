### Roster Details<br />
Team Name: Team ZevS<br />
Roster: Bexyz, Dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [247](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  657.0<br />
<br />
Final Rank Value (657.0) = Starting Rank Value (664.7) + Head To Head Adjustments (-7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.7
- 400 + ( ( 0.138 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 664.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1068 | 2026-05-01 | Just Swing (Chinese team) | L   | 0.950      | -            | -                | -                | -         |    -8.91 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            4 |     1119 | 2026-05-01 | Rooster                   | L   | 0.944      | -            | -                | -                | -         |   -11.01 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            3 |     1156 | 2026-04-30 | BMZ                       | W   | 0.938      | 0.471        | 0.007 (0.003)    | 0.286 (0.126)    | 1 (0.938) |    24.54 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            2 |     2114 | 2026-04-03 | NEXVOID                   | L   | 0.758      | -            | -                | -                | -         |    -2.20 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            1 |     2186 | 2026-04-02 | Yunglean                  | L   | 0.753      | -            | -                | -                | -         |   -10.12 | Bexyz, Dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($172.03)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.765 | $225.00        | $172.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
