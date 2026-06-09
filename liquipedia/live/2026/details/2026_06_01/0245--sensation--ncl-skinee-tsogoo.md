### Roster Details<br />
Team Name: Sensation<br />
Roster: ncl, sKINEE, Tsogoo<br />
Global Rank: [245](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [29]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  664.3<br />
<br />
Final Rank Value (664.3) = Starting Rank Value (654.9) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.223[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.9
- 400 + ( ( 0.134 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 654.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.023
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1173 | 2026-04-27 | The QUBE Esports | L   | 0.971      | -            | -                | -                | -         |    -8.19 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            4 |     1234 | 2026-04-26 | TYLOO            | L   | 0.965      | -            | -                | -                | -         |    -0.55 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            3 |     2965 | 2026-03-20 | The Huns Esports | L   | 0.717      | -            | -                | -                | -         |    -1.28 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            2 |     3033 | 2026-03-18 | 5star eSports    | W   | 0.705      | 0.307        | 0.023 (0.005)    | 0.394 (0.085)    | 1 (0.705) |    21.05 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            1 |     3092 | 2026-03-17 | NEXVOID          | L   | 0.697      | -            | -                | -                | -         |    -1.64 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($203.67)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      0.730 | $279.00        | $203.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
