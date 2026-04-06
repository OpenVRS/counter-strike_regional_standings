### Roster Details<br />
Team Name: Hindsight<br />
Roster: Ann4, Kaoday, Madam, mikeri, pullox<br />
Global Rank: [283](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [178]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  595.7<br />
<br />
Final Rank Value (595.7) = Starting Rank Value (616.6) + Head To Head Adjustments (-20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.6
- 400 + ( ( 0.111 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 616.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.026
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      927 | 2026-03-18 | Rune Eaters Esports | L   | 1.000      | -            | -                | -                | -         |    -3.00 | Ann4, Kaoday, Madam, mikeri, pullox |
|            8 |     1020 | 2026-03-16 | MANA eSports        | L   | 1.000      | -            | -                | -                | -         |    -3.43 | Ann4, Kaoday, Madam, mikeri, pullox |
|            7 |     2634 | 2026-02-12 | Let Her Cook        | L   | 0.848      | -            | -                | -                | -         |    -8.69 | Ann4, Kaoday, Madam, mikeri, pullox |
|            6 |     2643 | 2026-02-12 | Confidence          | W   | 0.847      | 0.384        | 0.001 (0.000)    | 0.006 (0.002)    | 0 (0.000) |    13.07 | Ann4, Kaoday, Madam, mikeri, pullox |
|            5 |     2709 | 2026-02-10 | Let Her Cook        | L   | 0.834      | -            | -                | -                | -         |    -8.37 | Ann4, Kaoday, Madam, mikeri, pullox |
|            4 |     3414 | 2026-01-18 | Team Pigeons        | L   | 0.678      | -            | -                | -                | -         |    -5.79 | Ann4, Kaoday, Madam, mikeri, pullox |
|            3 |     3562 | 2026-01-15 | TNC Esports         | L   | 0.658      | -            | -                | -                | -         |    -2.40 | Ann4, Kaoday, Madam, mikeri, pullox |
|            2 |     5297 | 2025-10-24 | Flame Sharks Female | L   | 0.107      | -            | -                | -                | -         |    -1.79 | Ann4, jenkon, Madam, mikeri, pullox |
|            1 |     5543 | 2025-10-15 | Let Her Cook        | L   | 0.047      | -            | -                | -                | -         |    -0.49 | Ann4, jenkon, Madam, mikeri, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($608.14)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.867 | $500.00        | $433.39         |
| 2025-10-26 |      0.121 | $1,450.00      | $174.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
