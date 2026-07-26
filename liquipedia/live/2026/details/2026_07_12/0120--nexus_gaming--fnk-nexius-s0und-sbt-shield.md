### Roster Details<br />
Team Name: Nexus Gaming<br />
Roster: fNk, Nexius, s0und, SBT, shield<br />
Global Rank: [120](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [82]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  906.7<br />
<br />
Final Rank Value (906.7) = Starting Rank Value (869.6) + Head To Head Adjustments (37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.319[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.6
- 400 + ( ( 0.248 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 869.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.117
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      440 | 2026-06-14 | Alliance   | L   | 1.000      | -            | -                | -                | -         |    -1.08 | fNk, Nexius, s0und, SBT, shield |
|            4 |      445 | 2026-06-14 | Noir Verse | W   | 1.000      | 0.374        | 0.001 (0.000)    | 0.154 (0.058)    | 1 (1.000) |    12.30 | fNk, Nexius, s0und, SBT, shield |
|            3 |      461 | 2026-06-13 | Metizport  | L   | 1.000      | -            | -                | -                | -         |    -8.15 | fNk, Nexius, s0und, SBT, shield |
|            2 |      472 | 2026-06-13 | Alliance   | W   | 1.000      | 0.374        | 0.271 (0.101)    | 1.000 (0.374)    | 1 (1.000) |    30.59 | fNk, Nexius, s0und, SBT, shield |
|            1 |      487 | 2026-06-13 | PURE       | W   | 1.000      | 0.374        | 0.000 (0.000)    | 0.071 (0.026)    | 1 (1.000) |     3.48 | fNk, Nexius, s0und, SBT, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,004.50)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      1.000 | $2,004.50      | $2,004.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
