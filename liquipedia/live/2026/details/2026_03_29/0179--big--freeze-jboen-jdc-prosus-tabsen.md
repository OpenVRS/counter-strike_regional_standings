### Roster Details<br />
Team Name: BIG<br />
Roster: FreeZe, JBOEN, JDC, prosus, tabseN<br />
Global Rank: [179](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [125]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  769.1<br />
<br />
Final Rank Value (769.1) = Starting Rank Value (751.5) + Head To Head Adjustments (17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.122[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.5
- 400 + ( ( 0.181 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 751.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.038
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4217 | 2025-11-09 | Mousquetaires    | W   | 0.262      | 0.433        | 0.008 (0.001)    | 0.196 (0.022)    | 1 (0.262) |     4.12 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            7 |     4280 | 2025-11-07 | Team Arise       | W   | 0.255      | 0.433        | 0.002 (0.000)    | 0.117 (0.013)    | 1 (0.255) |     2.75 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            6 |     4376 | 2025-11-07 | Team Unitronic   | W   | 0.249      | 0.433        | 0.000 (0.000)    | 0.008 (0.001)    | 1 (0.249) |     1.47 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            5 |     4503 | 2025-11-02 | M80              | L   | 0.218      | -            | -                | -                | -         |    -0.29 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            4 |     4520 | 2025-11-01 | Imperial Esports | W   | 0.213      | 0.333        | 0.041 (0.003)    | 0.543 (0.039)    | 1 (0.213) |     6.25 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            3 |     4528 | 2025-11-01 | FlyQuest RED     | W   | 0.212      | 0.333        | 0.007 (0.000)    | 0.086 (0.006)    | 1 (0.212) |     2.68 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            2 |     5514 | 2025-10-04 | Fnatic           | L   | 0.026      | -            | -                | -                | -         |    -0.07 | hyped, JDC, Krimbo, prosus, tabseN |
|            1 |     5533 | 2025-10-04 | KOLESIE          | W   | 0.024      | 0.333        | 0.047 (0.000)    | 0.596 (0.005)    | 1 (0.024) |     0.70 | hyped, JDC, Krimbo, prosus, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,527.50)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.262 | $30,000.00     | $7,872.92       |
| 2025-11-02 |      0.218 | $3,000.00      | $654.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
