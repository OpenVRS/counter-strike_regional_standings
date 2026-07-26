### Roster Details<br />
Team Name: Haunted House<br />
Roster: fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf<br />
Global Rank: [181](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_12.md)<br />
Regional Rank: [21]( ../../standings_asia_2026_07_12.md)<br />
<br />
Final Rank Value:  771.3<br />
<br />
Final Rank Value (771.3) = Starting Rank Value (757.3) + Head To Head Adjustments (14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.168[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.3
- 400 + ( ( 0.189 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 757.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.119
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1448 | 2026-05-13 | THUNDERdOWNUNDER          | L   | 0.796      | -            | -                | -                | -         |    -3.30 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|           12 |     1460 | 2026-05-12 | Change The Game           | W   | 0.795      | 0.548        | 0.003 (0.001)    | 0.135 (0.059)    | 1 (0.795) |    13.33 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|           11 |     1501 | 2026-05-11 | Lynn Vision Gaming        | L   | 0.788      | -            | -                | -                | -         |    -0.62 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|           10 |     1528 | 2026-05-11 | THUNDERdOWNUNDER          | W   | 0.783      | 0.548        | 0.030 (0.013)    | 0.344 (0.148)    | 1 (0.783) |    21.79 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|            9 |     1991 | 2026-04-27 | BORING PLAYER             | L   | 0.690      | -            | -                | -                | -         |   -12.28 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            8 |     2049 | 2026-04-26 | Kaleido Gaming            | L   | 0.684      | -            | -                | -                | -         |    -7.59 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            7 |     2982 | 2026-04-01 | DEPO                      | L   | 0.517      | -            | -                | -                | -         |    -3.76 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            6 |     3066 | 2026-03-31 | Legion (Pakistani team)   | W   | 0.511      | 0.624        | 0.000 (0.000)    | 0.079 (0.025)    | 0 (0.000) |     5.73 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            5 |     3100 | 2026-03-31 | THE UNIT                  | W   | 0.510      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.01 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            4 |     3600 | 2026-03-23 | Alter Ego                 | L   | 0.457      | -            | -                | -                | -         |    -5.50 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            3 |     3653 | 2026-03-22 | Never Say Never-          | W   | 0.451      | 0.333        | 0.000 (0.000)    | 0.058 (0.009)    | 0 (0.000) |     3.01 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            2 |     3714 | 2026-03-21 | Change The Game           | W   | 0.444      | 0.333        | 0.003 (0.000)    | 0.135 (0.020)    | 0 (0.000) |     7.49 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            1 |     3772 | 2026-03-20 | Just Swing (Chinese team) | L   | 0.437      | -            | -                | -                | -         |    -7.26 | chrizm, fr0k, icyvl0ne, malinov, shoma         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,466.67)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.822 | $3,000.00      | $2,466.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
