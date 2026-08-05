### Roster Details<br />
Team Name: PCIFIC<br />
Roster: eNs, jresy, lugseN, maxy0y0, scolleN<br />
Global Rank: [114](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  954.5<br />
<br />
Final Rank Value (954.5) = Starting Rank Value (905.5) + Head To Head Adjustments (49.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.5
- 400 + ( ( 0.261 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 905.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      802 | 2026-06-26 | CYBERSHOKE Prospects | L   | 0.946      | -            | -                | -                | -         |    -8.49 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            6 |      805 | 2026-06-26 | Rune Eaters          | W   | 0.945      | 0.324        | 0.022 (0.007)    | 0.895 (0.274)    | 1 (0.945) |    18.85 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            5 |      824 | 2026-06-25 | CYBERSHOKE Prospects | W   | 0.939      | 0.324        | 0.013 (0.004)    | 0.722 (0.219)    | 1 (0.939) |    21.34 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            4 |      832 | 2026-06-25 | DEPO                 | W   | 0.938      | 0.324        | 0.016 (0.005)    | 0.481 (0.146)    | 1 (0.938) |    23.29 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            3 |     1408 | 2026-05-29 | Rune Eaters          | L   | 0.760      | -            | -                | -                | -         |    -8.03 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            2 |     1420 | 2026-05-29 | DNK                  | W   | 0.759      | 0.354        | 0.001 (0.000)    | 0.023 (0.006)    | 1 (0.759) |     4.21 | eNs, jresy, lugseN, maxy0y0, scolleN |
|            1 |     1428 | 2026-05-29 | HOTU                 | L   | 0.758      | -            | -                | -                | -         |    -2.11 | eNs, jresy, lugseN, maxy0y0, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,320.94)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-26 |      0.946 | $2,045.00      | $1,934.56       |
| 2026-05-31 |      0.773 | $500.00        | $386.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
