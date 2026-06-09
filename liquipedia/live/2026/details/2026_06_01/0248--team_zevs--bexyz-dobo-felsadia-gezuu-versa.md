### Roster Details<br />
Team Name: Team ZevS<br />
Roster: Bexyz, Dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [248](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  659.4<br />
<br />
Final Rank Value (659.4) = Starting Rank Value (666.8) + Head To Head Adjustments (-7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.8
- 400 + ( ( 0.140 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 666.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      958 | 2026-05-01 | Just Swing (Chinese team) | L   | 1.000      | -            | -                | -                | -         |    -9.10 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            4 |     1009 | 2026-05-01 | Rooster                   | L   | 0.996      | -            | -                | -                | -         |   -11.56 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            3 |     1046 | 2026-04-30 | BMZ                       | W   | 0.991      | 0.471        | 0.007 (0.003)    | 0.304 (0.142)    | 1 (0.991) |    26.18 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            2 |     2004 | 2026-04-03 | NEXVOID                   | L   | 0.810      | -            | -                | -                | -         |    -2.14 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            1 |     2076 | 2026-04-02 | Yunglean                  | L   | 0.805      | -            | -                | -                | -         |   -10.74 | Bexyz, Dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($183.79)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.817 | $225.00        | $183.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
