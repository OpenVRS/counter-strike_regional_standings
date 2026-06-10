### Roster Details<br />
Team Name: Nas Esports<br />
Roster: Biuckmt, Mirror, Mr66, S1kura<br />
Global Rank: [305](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  533.0<br />
<br />
Final Rank Value (533.0) = Starting Rank Value (535.3) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.3
- 400 + ( ( 0.070 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 535.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.056
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1070 | 2026-05-01 | Wings of Freedom        | L   | 0.950      | -            | -                | -                | -         |   -11.89 | Biuckmt, Corazz, Mirror, Mr66, S1kura |
|            5 |     1109 | 2026-05-01 | Legion (Pakistani team) | W   | 0.945      | 0.471        | 0.001 (0.000)    | 0.131 (0.058)    | 1 (0.945) |    19.64 | Biuckmt, Corazz, Mirror, Mr66, S1kura |
|            4 |     1165 | 2026-04-30 | 5star eSports           | L   | 0.938      | -            | -                | -                | -         |    -0.99 | Biuckmt, Corazz, Mirror, Mr66, S1kura |
|            3 |     2554 | 2026-03-29 | Unsettled Resentment    | L   | 0.724      | -            | -                | -                | -         |   -15.08 | Biuckmt, Mirror, Mr66, nnnGod, S1kura |
|            2 |     2555 | 2026-03-28 | Walk The Talk           | W   | 0.723      | 0.320        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.86 | Biuckmt, Mirror, Mr66, nnnGod, S1kura |
|            1 |     2634 | 2026-03-28 | Chinggis Warriors       | L   | 0.718      | -            | -                | -                | -         |    -0.86 | Biuckmt, Mirror, Mr66, nnnGod, S1kura |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
