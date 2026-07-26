### Roster Details<br />
Team Name: Team ZevS<br />
Roster: Bexyz, Dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [272](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_12.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_07_12.md)<br />
<br />
Final Rank Value:  631.6<br />
<br />
Final Rank Value (631.6) = Starting Rank Value (640.5) + Head To Head Adjustments (-8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.215[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.5
- 400 + ( ( 0.127 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 640.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.028
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1778 | 2026-05-01 | Just Swing (Chinese team) | L   | 0.722      | -            | -                | -                | -         |    -7.92 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            4 |     1829 | 2026-05-01 | Rooster                   | L   | 0.715      | -            | -                | -                | -         |    -8.29 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            3 |     1866 | 2026-04-30 | BMZ                       | W   | 0.710      | 0.471        | 0.005 (0.002)    | 0.226 (0.076)    | 1 (0.710) |    17.24 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            2 |     2824 | 2026-04-03 | NEXVOID                   | L   | 0.529      | -            | -                | -                | -         |    -2.60 | Bexyz, Dobo, FELSADIA, GEZUU, versa |
|            1 |     2896 | 2026-04-02 | Yunglean                  | L   | 0.524      | -            | -                | -                | -         |    -7.37 | Bexyz, Dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($120.54)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.536 | $225.00        | $120.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
